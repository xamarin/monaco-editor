/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.0(660206dadc5af0d5b1278f59811366f03067c18c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.it", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (nuova occorrenza)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Usa espressione regolare",
		"Parola intera",
		"Maiuscole/minuscole",
		"input",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Errore: {0}",
		"Avviso: {0}",
		"Info: {0}",
	],
	"vs/base/common/json": [
		"Simbolo non valido",
		"Formato di numero non valido",
		"È previsto un nome di proprietà",
		"È previsto un valore",
		"Sono previsti i due punti",
		"È prevista la virgola",
		"È prevista la parentesi graffa di chiusura",
		"È prevista la parentesi quadra di chiusura",
		"È prevista la fine del file",
	],
	"vs/base/common/keybinding": [
		"Windows",
		"CTRL",
		"MAIUSC",
		"ALT",
		"Comando",
		"Windows",
		"CTRL",
		"MAIUSC",
		"ALT",
		"Comando",
		"Windows",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, selezione",
		"selezione",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Selezione rapida. Digitare per ridurre il numero di risultati.",
		"Selezione rapida",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Comprimi",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controlla la famiglia di caratteri.",
		"Controlla lo spessore del carattere.",
		"Controlla le dimensioni del carattere in pixel.",
		"Controlla l\'altezza della riga. Usare 0 per calcolare l\'altezza della riga dalle dimensioni del carattere.",
		"Consente di controllare la visualizzazione dei numeri di riga. I valori possibili sono \'on\', \'off\' e \'relative\'. Con \'relative\' viene visualizzato il conteggio delle righe a partire dalla posizione corrente del cursore.",
		"Colonne in corrispondenza delle quali visualizzare i righelli verticali",
		"Caratteri che verranno usati come separatori di parola quando si eseguono operazioni o spostamenti correlati a parole",
		"Numero di spazi a cui equivale una tabulazione. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.",
		"È previsto \'number\'. Nota: il valore \"auto\" è stato sostituito dall\'impostazione `editor.detectIndentation`.",
		"Inserisce spazi quando viene premuto TAB. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.",
		"È previsto \'boolean\'. Nota: il valore \"auto\" è stato sostituito dall\'impostazione `editor.detectIndentation`.",
		"All\'apertura di un file, `editor.tabSize` e `editor.insertSpaces` verranno rilevati in base al contenuto del file.",
		"Controlla se gli angoli delle selezioni sono arrotondati",
		"Controlla se l\'editor scorrerà oltre l\'ultima riga",
		"Controlla il numero di caratteri dopo i quali l\'editor attiverà l\'a capo automatico alla riga successiva. Se è impostato su 0, verrà attivato l\'a capo automatico in base alla larghezza del viewport (ritorno a capo automatico). Se è impostato su -1, forzerà l\'editor a non eseguire mai il wrapping.",
		"Controlla se le righe devono andare a capo. Le righe andranno a capo alla posizione definita da min(editor.wrappingColumn, viewportWidthInColumns).",
		"Controlla il rientro delle righe con ritorno a capo. Può essere uno dei valori seguenti: \'none\', \'same\' o \'indent\'.",
		"Moltiplicatore da usare sui valori `deltaX` e `deltaY` degli eventi di scorrimento della rotellina del mouse",
		"Controlla se durante la digitazione verranno o meno visualizzati i suggerimenti rapidi",
		"Controlla il ritardo in ms dopo il quale verranno visualizzati i suggerimenti rapidi",
		"Abilita i suggerimenti per i parametri",
		"Controlla se l\'editor deve chiudere automaticamente le parentesi quadre dopo che sono state aperte",
		"Controlla se l\'editor deve formattare automaticamente la riga dopo la digitazione",
		"Controlla se i suggerimenti devono essere visualizzati automaticamente durante la digitazione dei caratteri trigger",
		"Controlla se i suggerimenti devono essere accettati con \'INVIO\' in aggiunta a \'TAB\'. Consente di evitare ambiguità tra l\'inserimento di nuove righe e l\'accettazione di suggerimenti.",
		"Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (\';\') can be a commit character that accepts a suggestion and types that character.",
		"Controlla se i frammenti di codice sono visualizzati con altri suggerimenti e il modo in cui sono ordinati.",
		"Consente di controllare se, quando si copia senza aver effettuato una selezione, viene copiata la riga corrente.",
		"Abilita i suggerimenti basati su parole.",
		"Dimensioni del carattere per il widget dei suggerimenti",
		"Altezza della riga per il widget dei suggerimenti",
		"Inserisce frammenti di codice quando il prefisso corrisponde. Funziona in modo ottimale quando non sono abilitati i suggerimenti rapidi.",
		"Controlla se l\'editor deve evidenziare gli elementi corrispondenti simili alla selezione",
		"Controlla il numero di effetti che possono essere visualizzati nella stessa posizione nel righello delle annotazioni",
		"Controlla lo stile di animazione del cursore. I valori possibili sono: \'blink\', \'smooth\', \'phase\', \'expand\' e \'solid\'",
		"Ingrandisce il carattere dell\'editor quando si usa la rotellina del mouse e si tiene premuto CTRL",
		"Controlla lo stile del cursore. I valori accettati sono \'block\', \'line\' e \'underline\'",
		"Abilita i caratteri legatura",
		"Controlla se il cursore deve essere nascosto nel righello delle annotazioni.",
		"Consente di controllare in che modo l\'editor deve eseguire il rendering dei caratteri di spazio vuoto. Le opzioni possibili sono: \'none\', \'boundary\' e \'all\'. Con l\'opzione \'boundary\' non viene eseguito il rendering di singoli spazi tra le parole.",
		"Controlla se l\'editor deve eseguire il rendering dei caratteri di controllo",
		"Controlla se l\'editor deve eseguire il rendering delle guide con rientro",
		"Consente di controllare in che modo l\'editor deve eseguire il rendering dell\'evidenziazione di riga corrente. Le opzioni possibili sono \'none\', \'gutter\', \'line\' e \'all\'.",
		"Controlla se nell\'editor sono visualizzate le finestre di CodeLens",
		"Controlla se per l\'editor è abilitata la riduzione del codice",
		"Controlla se l\'editor deve eseguire il rendering del margine verticale del glifo. Il margine del glifo viene usato principalmente per il debug.",
		"Inserimento ed eliminazione dello spazio vuoto dopo le tabulazioni",
		"Rimuovi lo spazio vuoto finale inserito automaticamente",
		"Mantiene aperti gli editor rapidi anche quando si fa doppio clic sul contenuto o si preme ESC.",
		"Controlla se l\'editor diff mostra le differenze affiancate o incorporate",
		"Controlla se l\'editor diff mostra come differenze le modifiche relative a spazi vuoti iniziali e finali",
		"Consente di controllare se l\'editor diff mostra gli indicatori +/- per le modifiche aggiunte/rimosse",
		"Controlla se gli appunti primari di Linux devono essere supportati.",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenuto editor",
	],
	"vs/editor/common/controller/cursor": [
		"Eccezione imprevista durante l\'esecuzione del comando.",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"Si è verificato un errore della modalità durante la suddivisione in token dell\'input.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Testo normale",
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}, {1}",
	],
	"vs/editor/common/services/bulkEdit": [
		"Nel frattempo questi file sono stati modificati: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Dichiarazioni del linguaggio per contributes.",
		"ID del linguaggio.",
		"Alias di nome per il linguaggio.",
		"Estensioni di file associate al linguaggio.",
		"Nomi file associati al linguaggio.",
		"Criteri GLOB dei nomi file associati al linguaggio.",
		"Tipi MIME associati al linguaggio.",
		"Espressione regolare corrispondente alla prima riga di un file del linguaggio.",
		"Percorso relativo di un file che contiene le opzioni di configurazione per il linguaggio.",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}]\n{1}",
		"[{0}] {1}",
	],
	"vs/editor/contrib/bracketMatching/common/bracketMatching": [
		"Go to Bracket",
	],
	"vs/editor/contrib/caretOperations/common/caretOperations": [
		"Move Caret Left",
		"Move Caret Right",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Taglia",
		"Copia",
		"Incolla",
	],
	"vs/editor/contrib/comment/common/comment": [
		"Attiva/Disattiva commento per la riga",
		"Aggiungi commento per la riga",
		"Rimuovi commento per la riga",
		"Attiva/Disattiva commento per il blocco",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Mostra il menu di scelta rapida editor",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Trova",
		"Trova",
		"Risultato precedente",
		"Risultato successivo",
		"Trova nella selezione",
		"Chiudi",
		"Sostituisci",
		"Sostituisci",
		"Sostituisci",
		"Sostituisci tutto",
		"Attiva/Disattiva modalità sostituzione",
		"Vengono evidenziati solo i primi 999 risultati, ma tutte le operazioni di ricerca funzionano sull\'intero testo.",
		"{0} di {1}",
		"Nessun risultato",
	],
	"vs/editor/contrib/find/common/findController": [
		"Trova",
		"Trova successivo",
		"Trova precedente",
		"Trova selezione successiva",
		"Trova selezione precedente",
		"Sostituisci",
		"Aggiungi selezione a risultato ricerca successivo",
		"Aggiungi selezione a risultato ricerca precedente",
		"Sposta ultima selezione a risultato ricerca successivo",
		"Sposta ultima selezione a risultato ricerca precedente",
		"Seleziona tutte le occorrenze del risultato ricerca",
		"Cambia tutte le occorrenze",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Espandi",
		"Espandi in modo ricorsivo",
		"Riduci",
		"Riduci in modo ricorsivo",
		"Riduci tutto",
		"Espandi tutto",
		"Fold Level {0}",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Formatta documento",
		"Selezione formato",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" - Definizioni di {0}",
		"Vai alla definizione",
		"Apri definizione lateralmente",
		"Visualizza la definizione",
		"Go to Implementation",
		"Peek Implementation",
		"Fare clic per visualizzare {0} definizioni.",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"Vai a errore o avviso successivo",
		"Vai a errore o avviso precedente",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Visualizza passaggio del mouse",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Caricamento...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Sostituisci con il valore precedente",
		"Sostituisci con il valore successivo",
	],
	"vs/editor/contrib/inspectTokens/browser/inspectTokens": [
		"Developer: Inspect Tokens",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copia la riga in alto",
		"Copia la riga in basso",
		"Sposta la riga in alto",
		"Sposta la riga in basso",
		"Ordinamento righe crescente",
		"Ordinamento righe decrescente",
		"Taglia spazio vuoto finale",
		"Elimina la riga",
		"Imposta un rientro per la riga",
		"Riduci il rientro per la riga",
		"Inserisci la riga sopra",
		"Inserisci la riga sotto",
		"Elimina tutto a sinistra",
		"Delete All Right",
		"Unisci righe",
		"Trasponi caratteri intorno al cursore",
		"Converti in maiuscolo",
		"Converti in minuscolo",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + clic per seguire il collegamento",
		"CTRL + clic per seguire il collegamento",
		"Non è stato possibile aprire questo collegamento perché il formato non è valido: {0}",
		"Non è stato possibile aprire questo collegamento perché manca la destinazione.",
		"Apri il collegamento",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Aggiungi cursore sopra",
		"Aggiungi cursore sotto",
		"Crea più cursori dalle righe selezionate",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Attiva i suggerimenti per i parametri",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, suggerimento",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Mostra correzioni ({0})",
		"Mostra correzioni",
		"Correzione rapida",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Vai alla riga {0} e alla colonna {1}",
		"Vai alla riga {0}",
		"Digitare un numero di riga compreso tra 1 e {0} per passare a",
		"Digitare un numero di colonna compreso tra 1 e {0} per passare a",
		"Go to line {0}",
		"Digitare un numero di riga, seguito da due punti facoltativi e da un numero di colonna per passare a",
		"Vai alla riga...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Digitare il nome di un\'azione da eseguire",
		"Tavolozza comandi",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Digitare il nome di un identificatore a cui passare",
		"Vai al simbolo...",
		"simboli ({0})",
		"moduli ({0})",
		"classi ({0})",
		"interfacce ({0})",
		"metodi ({0})",
		"funzioni ({0})",
		"proprietà ({0})",
		"variabili ({0})",
		"variabili ({0})",
		"costruttori ({0})",
		"chiamate ({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" - Riferimenti di {0}",
		"Trova tutti i riferimenti",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Caricamento...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Non è stato possibile risolvere il file.",
		"{0} riferimenti",
		"{0} riferimento",
		"anteprima non disponibile",
		"Riferimenti",
		"Nessun risultato",
		"Riferimenti",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"L\'esecuzione dell\'operazione di ridenominazione non è riuscita.",
		"Rinomina simbolo",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Consente di rinominare l\'input. Digitare il nuovo nome e premere INVIO per eseguire il commit.",
	],
	"vs/editor/contrib/rename/common/rename": [
		"Nessun risultato.",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Espandi SELECT",
		"Comprimi SELECT",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Attiva suggerimento",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Altre informazioni...{0}",
		"{0}, suggerimento, con dettagli",
		"{0}, suggerimento",
		"Indietro",
		"Caricamento...",
		"Non ci sono suggerimenti.",
		"{0}, accettato",
		"{0}, suggerimento, con dettagli",
		"{0}, suggerimento",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Tab Key Moves Focus",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Chiudi",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Configure settings to be overridden for language modes. To override, use the language id, or language ids separated by \',\' as the key to group settings. Example:\n\"settings.overrides\" = {\n\t\t\"markdown\" = {\n\t\t\t\"editor.wrappingColumn\": 0\n\t\t},\n\t\t\"css,scss\" = {\n\t\t\t\"editor.formatOnSave\": true\n\t\t}\n}\n",
		"Override Settings",
		"Impostazioni di configurazione di contributes.",
		"Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.",
		"Descrizione delle proprietà di configurazione.",
		"se impostato, \'configuration.type\' deve essere impostato su \'object",
		"\'configuration.title\' deve essere una stringa",
		"\'configuration.properties\' deve essere un oggetto",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Per le estensioni di Visual Studio Code consente di specificare la versione di Visual Studio Code con cui è compatibile l\'estensione. Non può essere *. Ad esempio: ^0.10.5 indica la compatibilità con la versione minima 0.10.5 di Visual Studio Code.",
		"Editore dell\'estensione Visual Studio Code.",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
		"Imposta l\'estensione in modo che venga contrassegnata come Anteprima nel Marketplace.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Matrice di notifiche da visualizzare nella barra laterale della pagina delle estensioni del Marketplace.",
		"URL di immagine della notifica.",
		"Collegamento della notifica.",
		"Descrizione della notifica.",
		"Dipendenze ad altre estensioni. L\'identificatore di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Percorso di un\'icona da 128x128 pixel.",
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"Altri comandi disponibili: ",
		"È stato premuto ({0}). In attesa del secondo tasto...",
		"La combinazione di tasti ({0}, {1}) non è un comando.",
	],
	"vs/platform/message/common/message": [
		"Chiudi",
		"In seguito",
		"Annulla",
	]
});