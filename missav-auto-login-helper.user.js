// ==UserScript==
// @name       MissAV   Automatic login
// @name:zh-CN        MissAV   自动登录
// @description:zh-CN 检测  MissAV   状态,并且在未登录时自动登录
// @name:ar        MissAV   تسجيل الدخول التلقائي
// @description:ar كشف  MissAV   ولاية,وتسجيل الدخول تلقائيًا في حالة عدم تسجيل الدخول
// @name:bg        MissAV   Автоматично влизане
// @description:bg Откриване  MissAV   състояние,и автоматично влизане, когато не сте влезли
// @name:cs        MissAV   Automatické přihlášení
// @description:cs Detekce  MissAV   stát,a automaticky se přihlásit, když nejste přihlášeni
// @name:da        MissAV   Automatisk login
// @description:da Opdagelse  MissAV   tilstand,og logger automatisk på, når du ikke er logget ind
// @name:de        MissAV   Automatische Anmeldung
// @description:de Erkennung  MissAV   Zustand,und melden Sie sich automatisch an, wenn Sie nicht angemeldet sind
// @name:el        MissAV   Αυτόματη σύνδεση
// @description:el Ανίχνευση  MissAV   κατάσταση,και αυτόματα συνδέεστε όταν δεν είστε συνδεδεμένοι
// @name:en        MissAV   Automatic login
// @description:en Detection  MissAV   state,and automatically log in when not logged in
// @name:eo        MissAV   Aŭtomata ensaluto
// @description:eo Detekto  MissAV   stato,kaj aŭtomate ensalutu kiam ne ensalutinta
// @name:es        MissAV   Inicio de sesión automático
// @description:es Detección  MissAV   estado,e iniciar sesión automáticamente cuando no haya iniciado sesión
// @name:fi        MissAV   Automaattinen sisäänkirjautuminen
// @description:fi Havaitseminen  MissAV   osavaltio,ja kirjaudu sisään automaattisesti, kun et ole kirjautunut sisään
// @name:fr        MissAV   Connexion automatique
// @description:fr Détection  MissAV   État,et connectez-vous automatiquement lorsque vous n’êtes pas connecté
// @name:he        MissAV   כניסה אוטומטית
// @description:he איתור  MissAV   מְדִינָה,והתחבר אוטומטית כאשר לא מחובר
// @name:hr        MissAV   Automatska prijava
// @description:hr Otkrivanje  MissAV   stanje,i automatski se prijavite kada niste prijavljeni
// @name:hu        MissAV   Automatikus bejelentkezés
// @description:hu Érzékelés  MissAV   állami,és automatikusan bejelentkezik, ha nincs bejelentkezve
// @name:id        MissAV   Masuk otomatis
// @description:id Deteksi  MissAV   negara,dan secara otomatis login ketika tidak login
// @name:it        MissAV   Accesso automatico
// @description:it Rilevamento  MissAV   stato,e accedi automaticamente quando non sei loggato
// @name:ja        MissAV   自動ログイン
// @description:ja 検出  MissAV   州,ログインしていない場合は自動的にログインします
// @name:ka        MissAV   ავტომატური შესვლა
// @description:ka გამოვლენა  MissAV   სახელმწიფო,და ავტომატურად შედით სისტემაში, როდესაც არ ხართ შესული
// @name:ko        MissAV   자동 로그인
// @description:ko 발각  MissAV   상태,로그인하지 않으면 자동으로 로그인됩니다.
// @name:nl        MissAV   Automatisch inloggen
// @description:nl Detectie  MissAV   staat,en automatisch inloggen als je niet ingelogd bent
// @name:nb        MissAV   Automatisk pålogging
// @description:nb Oppdagelse  MissAV   tilstand,og logger automatisk på når du ikke er pålogget
// @name:pl        MissAV   Automatyczne logowanie
// @description:pl Wykrywanie  MissAV   państwo,i automatycznie loguj się, gdy nie jesteś zalogowany
// @name:pt-BR        MissAV   Login automático
// @description:pt-BR Detecção  MissAV   estado,e faça login automaticamente quando não estiver conectado
// @name:ro        MissAV   Conectare automată
// @description:ro Detectare  MissAV   stat,și conectați-vă automat când nu sunteți autentificat
// @name:ru        MissAV   Автоматический вход
// @description:ru Обнаружение  MissAV   состояние,и автоматически входить в систему, когда вы не вошли в систему
// @name:sk        MissAV   Automatické prihlásenie
// @description:sk Detekcia  MissAV   štátu,a automaticky sa prihlásiť, keď nie ste prihlásení
// @name:sr        MissAV   Аутоматско пријављивање
// @description:sr Детецтион  MissAV   држава,и аутоматски се пријављује када нисте пријављени
// @name:sv        MissAV   Automatisk inloggning
// @description:sv Upptäckt  MissAV   ange,och logga in automatiskt när du inte är inloggad
// @name:th        MissAV   เข้าสู่ระบบอัตโนมัติ
// @description:th การตรวจจับ  MissAV   สถานะ,และเข้าสู่ระบบอัตโนมัติเมื่อไม่ได้เข้าสู่ระบบ
// @name:tr        MissAV   Otomatik giriş
// @description:tr Algılama  MissAV   durum,ve oturum açmadığınızda otomatik olarak oturum açın
// @name:ug        MissAV   ئاپتوماتىك كىرىش
// @description:ug بايقاش  MissAV   ئىشتات,ھەمدە كىرمىگەندە ئاپتوماتىك كىرىدۇ
// @name:uk        MissAV   Автоматичний вхід
// @description:uk виявлення  MissAV   стан,і автоматично ввійти, якщо ви не ввійшли
// @name:vi        MissAV   Đăng nhập tự động
// @description:vi Phát hiện  MissAV   tình trạng,và tự động đăng nhập khi chưa đăng nhập
// @name:zh-TW        MissAV   自動登入
// @description:zh-TW 偵測  MissAV   狀態,並且在未登入時自動登入
// @name:zh-HK        MissAV   自動登入
// @description:zh-HK 偵測  MissAV   狀態,並且在未登入時自動登入
// @name:fr-CA        MissAV   Connexion automatique
// @description:fr-CA Détection  MissAV   État,et connectez-vous automatiquement lorsque vous n’êtes pas connecté
// @description Detection  MissAV   state,and automatically log in when not logged in
// @namespace               https://github.com/ChinaGodMan/UserScripts
// @author         人民的勤务员 <toniaiwanowskiskr47@gmail.com>
// @match        https://missav.com/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// @version 1.0.0.97
// @require      https://update.greasyfork.org/scripts/498897/1404834/Toastnew.js
// @icon         https://pic.616pic.com/ys_bnew_img/00/35/79/Gv93yQh7v6.jpg
// @supportURL              https://github.com/ChinaGodMan/UserScripts/issues
// @homepageURL   https://github.com/ChinaGodMan/UserScripts
// @license      MIT
// ==/UserScript==

const translate = (function () {
    const userLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'
    const strings = {
        'en': {
            Accountnull: 'Error: UserEmail or UserPassword is empty.',
            loginSuccess: 'Login successful, refreshing the page.',
            Networkfailed: 'Status code error.',
            Loginfailed: 'Login failed, incorrect email or password. Check console for error details.',
        },
        'zh-CN': {
            Accountnull: '邮箱或密码为空',
            loginSuccess: '登录成功，即将刷新页面。',
            Networkfailed: '状态码错误',
            Loginfailed: '登录失败，邮箱或密码错误，可以在控制台查看错误信息。',
        },
        'zh-TW': {
            Accountnull: '郵箱或密碼為空',
            loginSuccess: '登錄成功，即將刷新頁面。',
            Networkfailed: '狀態碼錯誤',
            Loginfailed: '登錄失敗，郵箱或密碼錯誤，可以在控制台查看錯誤信息。',
        },
        'ja': {
            Accountnull: 'エラー：メールアドレスまたはパスワードが空です。',
            loginSuccess: 'ログイン成功、ページを更新します。',
            Networkfailed: 'ステータスコードエラー',
            Loginfailed: 'ログインに失敗しました。メールアドレスまたはパスワードが間違っています。エラーの詳細はコンソールで確認できます。',
        },
        'vi': {
            Accountnull: 'Lỗi: Email hoặc mật khẩu trống.',
            loginSuccess: 'Đăng nhập thành công, đang làm mới trang.',
            Networkfailed: 'Lỗi mã trạng thái.',
            Loginfailed: 'Đăng nhập không thành công, email hoặc mật khẩu không chính xác. Xem chi tiết lỗi trên bảng điều khiển.',
        }
    }

    return (id, lang = '') => {
        const selectedLang = lang || userLang
        return (strings[selectedLang] || strings.en)[id] || strings.en[id]
    }
}());
(function () {
    'use strict'
    let UserEmail = GM_getValue("UserEmail", "")
    let UserPassword = GM_getValue("UserPassword", "")
    var style = document.createElement('style')
    GM_registerMenuCommand("Set Account", showuserInfoModal)
    function showuserInfoModal() {
        let modalHtml = `
        <div id="userInfoModal" style="position: fixed; z-index: 10000; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); top: 20%; left: 50%; transform: translate(-50%, -20%); max-width: 300px;">
            <h2 style="margin-top: 0;">Set Account </h2>
            <div style="margin-bottom: 10px;">
                <label for="UserEmail" style="display: block; margin-bottom: 5px;">UserEmail:</label>
                <input id="UserEmail" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" value="${UserEmail}" />
            </div>
            <div style="margin-bottom: 20px;">
                <label for="UserPassword" style="display: block; margin-bottom: 5px;">UserPassword:</label>
                <input id="UserPassword" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" value="${UserPassword}" />
            </div>
            <div style="text-align: right;">
                <button id="saveUserInfo" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Save</button>
                <button id="closeUserModal" style="background-color: #f44336; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">Close</button>
            </div>
        </div>`
        let modalDiv = document.createElement('div')
        modalDiv.innerHTML = modalHtml
        document.body.appendChild(modalDiv)
        document.getElementById("saveUserInfo").addEventListener("click", function () {
            UserEmail = document.getElementById("UserEmail").value
            UserPassword = document.getElementById("UserPassword").value
            GM_setValue("UserEmail", UserEmail)
            GM_setValue("UserPassword", UserPassword)
            closeUserModal()
        })
        document.getElementById("closeUserModal").addEventListener("click", closeUserModal)
    }
    function closeUserModal() {
        let modal = document.getElementById("userInfoModal")
        if (modal) {
            modal.remove()
        }
    }
    function login(email, password) {
        if (!email || !password) {
            Toast(translate('Accountnull'), 2000, '#FF0000', '#ffffff', 'top')
            return
        }
        fetch('https://missav.com/cn/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                remember: true,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        console.error('Login error:', {
                            status: response.status,
                            statusText: response.statusText,
                            responseText: text,
                        })
                        Toast('Login failed: ' + text, 2000, '#FF0000', '#ffffff', 'top')
                        throw new Error(translate('Networkfailed'))
                    })
                }
                if (response.headers.get('Content-Type')?.includes('application/json')) {
                    return response.json()
                } else {
                    return response.text().then(text => {
                        console.error(translate('Loginfailed'), {
                            status: response.status,
                            statusText: response.statusText,
                            responseText: text,
                        })
                        Toast(translate('Loginfailed'), 2000, '#FF0000', '#ffffff', 'top')
                        throw new Error(translate('Loginfailed'))
                    })
                }
            })
            .then(data => {
                console.log('Success:', data)
                Toast(translate('loginSuccess'), 2000, 'rgb(18, 187, 2)', '#ffffff', 'top')
                location.reload()
            })
            .catch(error => {
                Toast('An error occurred: ' + error.message, 2000, '#FF0000', '#ffffff', 'top')
            })
    }
    function check() {
        const url = 'https://missav.com/api/actresses/1016525/view'
        fetch(url, {
            method: 'GET'
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Network response was not ok.')
                }
            })
            .then(data => {
                if (data) {
                    if (data.user === null) {
                        login(UserEmail, UserPassword)
                    } else {
                        // 已经登录
                    }
                }
            })
            .catch(error => console.error('Error:', error))
    }
    check()
})()
