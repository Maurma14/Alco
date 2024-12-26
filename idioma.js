// script.js
document.getElementById('Idioma').addEventListener('change', function() {
    const idioma = this.value;
    cambiarIdioma(idioma);
});

function cambiarIdioma(idioma) {
    const textos = {
        Español: {
            titulo: "Bienvenido a tu progama de proteccion de tránsito seguro",
            Idi:"Idioma - Lenguage",
            Iniciar:"Iniciar sesión",
            User:"Usuario",
            pass:"Contraseña",
            No:"No tienes cuenta?",
            Create:"Registrate",
        },
        English: {
            titulo:"Welcome to your Safe Traffic Protection Program",
            Idi: "Language - Language",
            Iniciar:"Sign in",
            User:"User",
            pass:"Password",
            No: "Don't have an account?",
            Create: "Sign up",
        },
        Français: {
            titulo:"Bienvenue dans votre programme de protection de la circulation en toute sécurité",
            Idi: "Langue - Langue",
            Iniciar:"Connexion",
            User:"Utilisateur",
            pass:"Mot de passe",
            No:"Vous n’avez pas de compte ?",
            Create:"Inscrivez-vous",
        },
        Português: {
            titulo: "Bem-vindo ao seu Programa de Proteção Segura do Tráfego",
            Idi: "Linguagem - Linguagem",
            Iniciar: "Login",
            User:"Usuário",
            pass:"Senha",
            No: "Não tem uma conta?",
            Create:"Cadastre-se",
        },
        中國人: {
            titulo: "歡迎加入您的安全交通保護計劃",
            Idi: "語言 - 語言",
            Iniciar:"登錄",
            User:"使用者",
            pass: "密碼",
            No:"沒有帳戶?",
            Create:"註冊",
        },
        Türkçe: {
            titulo: "Güvenli Trafik Koruma Programınıza Hoş Geldiniz",
            Idi: "Dil - Dil",
            Iniciar: "Giriş",
            User:"Kullanıcı",
            pass:"Şifre",
            No: "Hesabınız yok mu?",
            Create:"Kaydolmak",

        },
        Русский: {
            titulo: "Добро пожаловать в Вашу программу защиты безопасного дорожного движения",
            Idi: "Language - язык",
            Iniciar: "Вход",
            User:"Пользователь",
            pass:"Пароль",
            No: "У вас нет учетной записи?",
            Create:"Регистрировать",
        },
        Italiano: {
            titulo: "Benvenuti nel vostro programma di protezione della sicurezza stradale",
            Idi: "Lingua - Lingua",
            Iniciar: "Accedi",
            User:"Utente",
            pass:"Parola d’ordine",
            No: "Non hai un account?",
            Create:"Iscriviti",
        },
        한국인: {
            titulo: "안전한 교통 보호 프로그램에 오신 것을 환영합니다",
            Idi: "언어 - 언어",
            Iniciar: "로그인",
            User:"사용자",
            pass:"비밀번호",
            No: "계정이 없으신가요?",
            Create:"가입하기",
        },
        Latinus:{
            titulo: "Salve ad tuum Tutum Traffic Protection Programma", 
            Idi: "Lingua - Lingua", 
            Iniciar: "Login", 
            User: "Usor", 
            pass: "Tessera",
            No: "Non habes rationem?",
            Create:"Subscribere",
        },
        
    };

    document.getElementById('titulo').textContent = textos[idioma].titulo;
    document.getElementById('Idi').textContent = textos[idioma].Idi;
    document.getElementById('Iniciar').textContent = textos[idioma].Iniciar;
    document.getElementById('User').textContent = textos[idioma].User;
    document.getElementById('pass').textContent = textos[idioma].pass;
    document.getElementById('No').textContent = textos[idioma].No;
    document.getElementById('Create').textContent = textos[idioma].Create;
}
