var win = Titanium.UI.createWindow({
        backgroundColor : '#fff',
    });
 
    var pickerView = Ti.UI.createView({
        backgroundColor : '#D8D8D8',
        borderColor : '#0101DF',
        borderWidth : 1,
        borderRadius : 5,
        height : 50,
        left : 20,
        top : 100,
        right : 20,
    });
    var pickerText = Ti.UI.createLabel({
        text : 'Fatura Analiz',
        color : '#fff',
        width : '100%',
        height : '100%',
        left : 20,
        right : 0,
        color : '#000'
    });
 
    var pickerImage = Ti.UI.createImageView({
        image : 'KS_nav_ui.png',
        color : '#fff',
        width : 30,
        height : 30,
        right : 10,
    });
    pickerView.add(pickerText);
    pickerView.add(pickerImage);
 
    var dialog = Ti.UI.createOptionDialog();
    dialog.addEventListener('click', function(evt) {
        pickerText.text = evt.source.options[evt.index];
    });
    dialog.options = ['option 1', 'option 2', 'option 3'];
    dialog.title = 'Title';
    pickerView.addEventListener('click', function() {
        dialog.show();
    });
 
    win.add(pickerView);
    win.open();
