<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221209153715 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE channel (id INT AUTO_INCREMENT NOT NULL, admin_channel_id INT NOT NULL, id_channel CHAR(36) NOT NULL COMMENT \'(DC2Type:guid)\', name VARCHAR(50) DEFAULT NULL, pic_channel VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_A2F98E47BACB072F (admin_channel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id_message INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, content VARCHAR(300) NOT NULL, created_at DATETIME NOT NULL, ghost_time INT DEFAULT NULL, ghost_deleted_at DATETIME DEFAULT NULL, INDEX IDX_B6BD307FA76ED395 (user_id), PRIMARY KEY(id_message)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) DEFAULT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, photo VARCHAR(500) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, last_connected_at DATETIME NOT NULL, deleted_at DATETIME DEFAULT NULL, dark_mode TINYINT(1) NOT NULL, been_banned TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE channel ADD CONSTRAINT FK_A2F98E47BF396750 FOREIGN KEY (id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE channel ADD CONSTRAINT FK_A2F98E47BACB072F FOREIGN KEY (admin_channel_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE channel DROP FOREIGN KEY FK_A2F98E47BF396750');
        $this->addSql('ALTER TABLE channel DROP FOREIGN KEY FK_A2F98E47BACB072F');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FA76ED395');
        $this->addSql('DROP TABLE channel');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE user');
    }
}
