$(window).on('load scroll', (e) => {
        // HTMLドキュメントが読み込み完了した際
        if(e.type === 'load'){
            console.log('loadインベントが発生しました');
        }
        // 画面をスクロールした際
        if(e.type === 'scroll'){
            console.log('scrollイベントが発生しました');
        }
    });