$(function(){
    // 1.文字色変化ボタンがクリックされた時、
    $('#change-color').on('click', function(){
        // 文字の色が赤に変更
        $('#target').css('color', 'red');
    });
    // 2. 文字内容変化ボタンがクリックされた時、
    $('#change-text').on('click', function(){
        // 文字の色が赤に変更
        $('#target').css('color', 'red');
        // 文字の内容を’Hello!’に変更
        $('#target').text('Hello!');
    });
    // 3.フェードアウトボタンがクリックされた時、
    $('#fade-out').on('click', function(){
        // フェードアウトする
        $('#target').fadeOut();
    });
    // 4.フェードインボタンがクリックされた時、
    $('#fade-in').on('click', function(){
        // フェードインする
        $('#target').fadeIn();
    });
});