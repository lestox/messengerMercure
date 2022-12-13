<<<<<<< HEAD
<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    #[isGranted('ROLE_USER')]
    public function index()
    {
        if(!$this->isGranted('ROLE_USER')){
            return $this->redirectToRoute('app_login');
        }
    }
}
=======
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(Security $security): Response
    {
        if (!$security->getUser()) {
            return $this->redirectToRoute('app_login_check');
        }
        return $this->redirectToRoute('app_chat');

    }
}
>>>>>>> 35256268eabfd7fd6cc253ed2f6883354df2f918
