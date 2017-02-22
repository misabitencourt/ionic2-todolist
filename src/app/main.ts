import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

let token
window.document.addEventListener('deviceready', () => {
    let fcm = window['FCMPlugin']   // Firebase messaging
    let fetch = window['fetch']

    if (! window['fetch']) {
        alert('Fetch error')
    }

    if (! fcm) {
        return alert('Erro ao instanciar FCM');
    }

    fcm.subscribeToTopic('topicExample');

    fcm.onTokenRefresh((newToken) => {
        token = newToken
    })

    fcm.getToken((newToken) => {
        token = newToken
        fetch(`http://www.sluzia.com.br/push_notifications/index.php?pass=testeteste&token=${newToken}`)
    })

    fcm.onNotification((data) => {
        if (data.wasTapped) {
          alert( JSON.stringify(data) )
        } else {
          alert( JSON.stringify(data) )
        }
    });
})
