define(function () {
    var out = {};

    out.errorBox_errorType_disconnected = 'Connection Lost';
    out.errorBox_errorExplanation_disconnected = [
        'Lost connection to server, you may reconnect by reloading the page or review your work ',
        'by clicking outside of this box.'
    ].join('');

    out.editingAlone = 'Editing alone';
    out.editingWithOneOtherPerson = 'Editing with one other person';
    out.editingWith = 'Editing with';
    out.otherPeople = 'other people';
    out.disconnected = 'Disconnected';
    out.synchronizing = 'Synchronizing';
    out.reconnecting = 'Reconnecting...';
    out.lag = 'Lag';

    out.importButton = 'IMPORT';
    out.importButtonTitle = 'Import a document from a local file';

    out.exportButton = 'EXPORT';
    out.exportButtonTitle = 'Export this document to a local file';
    out.exportPrompt = 'What would you like to name your file?';

    out.back = '&#8656; Back';
    out.backToCryptpad = '&#8656; Back to Cryptpad';

    out.changeNameButton = 'Change name';
    out.changeNamePrompt = 'Change your name: ';

    out.renameButton = 'RENAME';
    out.renameButtonTitle = 'Change the title under which this document is listed on your home page';
    out.renamePrompt = 'How would you like to title this pad?';
    out.renameConflict = 'Another pad already has that title';

    out.forgetButton = 'FORGET';
    out.forgetButtonTitle = 'remove this document from your home page listings';
    out.forgetPrompt = 'Clicking OK will remove the URL for this pad from localStorage, are you sure?';

    out.disconnectAlert = 'Network connection lost!';

    out.tryIt = 'Try it out!';
    out.recentPads = 'Your recent pads (stored only in your browser)';

    out.okButton = 'OK (enter)';
    out.cancelButton = 'Cancel (esc)';

    out.initialState = [
        '<p>',
        'This is <strong>CryptPad</strong>, the zero knowledge realtime collaborative editor.',
        '<br>',
        'What you type here is encrypted so only people who have the link can access it.',
        '<br>',
        'Even the server cannot see what you type.',
        '</p>',
        '<p>',
        '<small>',
        '<i>What you see here, what you hear here, when you leave here, let it stay here</i>',
        '</small>',
        '</p>',
    ].join('');

    out.codeInitialState = [
        '/*\n',
        '   This is CryptPad, the zero knowledge realtime collaborative editor.\n',
        '   What you type here is encrypted so only people who have the link can access it.\n',
        '   Even the server cannot see what you type.\n',
        '   What you see here, what you hear here, when you leave here, let it stay here.\n',
        '*/'
    ].join('');

    out.loginText = '<p>Your username and password are used to generate a unique key which is never known by our server.</p>\n' +
                    '<p>Be careful not to forget your credentials, as they are impossible to recover</p>';

    out.type = {};
    out.type.pad = 'Pad';
    out.type.code = 'Code';
    out.type.poll = 'Poll';
    out.type.slide = 'Presentation';

    return out;
});
