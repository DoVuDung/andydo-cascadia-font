import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('cascadiaFontApplier.applyFont', () => {
    const config = vscode.workspace.getConfiguration();
    config.update('editor.fontFamily', 'Cascadia Code', vscode.ConfigurationTarget.Global);
    vscode.window.showInformationMessage('✅ Cascadia Code font applied!');
  });

  context.subscriptions.push(disposable);
}


export function deactivate() {}
