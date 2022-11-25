from flask import Flask
import redis

app = Flask(__name__)
redis = redis.Redis(host='redis', port=6379)

@app.route('/healthz', methods = ['GET'])
def healthCheck():
    if redis.ping():
        response = 'PONG', 200
    else:
        response = 'Connection failed', 503
    return response


@app.route('/user/<int:userId>', methods = ['GET'])
def isUserOnline(userId):
    if redis.exists(userId) == 1:
        return 'User {} is connected'.format(userId), 200

    return 'User {} is not connected'.format(userId), 404


@app.route('/user/<int:userId>', methods = ['POST'])
def setUserOnline(userId):
    redis.set(userId, "", ex=30)
    return 'OK', 200
