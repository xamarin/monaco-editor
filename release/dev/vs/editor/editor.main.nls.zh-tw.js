/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.0(660206dadc5af0d5b1278f59811366f03067c18c)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.zh-tw", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (再次出現)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"使用規則運算式",
		"全字拼寫須相符",
		"大小寫須相符",
		"輸入",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"錯誤: {0}",
		"警告: {0}",
		"資訊: {0}",
	],
	"vs/base/common/json": [
		"符號無效",
		"數字格式無效",
		"必須有屬性名稱",
		"必須有值",
		"必須為冒號",
		"必須為逗號",
		"必須為右大括號",
		"必須為右中括號",
		"必須為檔案結尾",
	],
	"vs/base/common/keybinding": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows",
	],
	"vs/base/common/severity": [
		"錯誤",
		"警告",
		"資訊",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}，選擇器",
		"選擇器",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"快速選擇器。輸入以縮小結果範圍。",
		"快速選擇器",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"摺疊",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"編輯器",
		"控制字型家族。",
		"控制字型寬度。",
		"控制字型大小 (以像素為單位)。",
		"控制行高。使用 0 會從 fontSize 計算 lineHeight。",
		"控制行號顯示。可能的值有 \'on\'、\'off\' 及 \'relative\'。\'relative\' 會從目前的資料指標位置顯示行數。",
		"要在其中顯示垂直尺規的資料行",
		"執行文字相關導覽或作業時將作為文字分隔符號的字元",
		"與 Tab 相等的空格數量。當 `editor.detectIndentation` 已開啟時，會根據檔案內容覆寫此設定。",
		"必須是 \'number\'。請注意，值 \"auto\" 已由 `editor.detectIndentation` 設定取代。",
		"在按 Tab 時插入空格。當 `editor.detectIndentation` 已開啟時，會根據檔案內容覆寫此設定。",
		"必須是 \'boolean\'。請注意，值 \"auto\" 已由 `editor.detect Indentation` 設定取代。",
		"開啟檔案時，會依據檔案內容來偵測 `editor.tabSize` 及 `editor.insertSpaces`。",
		"控制選取範圍是否有圓角",
		"控制編輯器是否會捲動到最後一行之後",
		"控制編輯器換行到下一行的字元數。若將此項目設為 0，將會開啟檢視區寬度換行 (自動換行)。若將此項目設為 -1，將會強制編輯器永不換行。",
		"控制是否應該自動換行。將於 min(editor.wrappingColumn, viewportWidthInColumns) 自動換行。",
		"控制換行的縮排。可以是 [無]、[相同] 或 [縮排]。",
		"滑鼠滾輪捲動事件的 \'deltaX\' 與 \'deltaY\' 所使用的乘數",
		"控制輸入時是否應顯示快速建議",
		"控制延遲顯示快速建議的毫秒數",
		"啟用參數提示",
		"控制編輯器是否應在左括號後自動插入右括號",
		"控制編輯器是否應在輸入一行後自動格式化",
		"控制輸入觸發字元時，是否應自動顯示建議",
		"控制除了 \'Tab\' 外，是否也藉由按下 \'Enter\' 接受建議。如此可避免混淆要插入新行或接受建議。",
		"Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (\';\') can be a commit character that accepts a suggestion and types that character.",
		"控制程式碼片段是否隨其他建議顯示，以及其排序方式。",
		"控制複製時不選取任何項目是否會複製目前程式行。",
		"啟用字組式建議。",
		"建議小工具的字型大小",
		"建議小工具的行高",
		"在前置詞相符時插入程式碼片段。最適用於未啟用 \'quickSuggestions\' 時。",
		"控制編輯器是否應反白顯示與選取範圍相似的符合項",
		"控制可在概觀尺規中相同位置顯示的裝飾項目數",
		"控制游標動畫樣式，可能的值為 \'blink\'、\'smooth\'、\'phase\'、\'expand\' 和 \'solid\'",
		"使用滑鼠滾輪並按住 Ctrl 時，縮放編輯器的字型",
		"控制游標樣式，接受的值為 \'block\'、\'line\' 和 \'underline\'",
		"啟用連字字型",
		"控制游標是否應隱藏在概觀尺規中。",
		"控制編輯器轉譯空白字元的方式，可能為 \'none\'、\'boundary\' 及 \'all\'。\'boundary\' 選項不會轉譯字組間的單一空格。",
		"控制編輯器是否應顯示控制字元",
		"控制編輯器是否應顯示縮排輔助線",
		"控制編輯器應如何轉譯目前反白的行，可能的值有 \'none\'、\'gutter\'、\'line\' 和 \'all\'。",
		"控制編輯器是否顯示程式碼濾鏡",
		"控制編輯器是否已啟用程式碼摺疊功能",
		"控制編輯器是否應轉譯垂直字符邊界。字符邊界最常用來進行偵錯。",
		"插入和刪除接在定位停駐點後的空白字元",
		"移除尾端自動插入的空白字元",
		"讓預覽編輯器在使用者按兩下其內容或點擊 Escape 時保持開啟。",
		"控制 Diff 編輯器要並排或內嵌顯示差異",
		"控制 Diff 編輯器是否將開頭或尾端空白字元的變更顯示為差異",
		"控制 Diff 編輯器是否要為新增的/移除的變更顯示 +/- 標記",
		"控制是否應支援 Linux 主要剪貼簿。",
	],
	"vs/editor/common/config/defaultConfig": [
		"編輯器內容",
	],
	"vs/editor/common/controller/cursor": [
		"執行命令時發生未預期的例外狀況。",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"將輸入語彙基元化時，模式失敗。",
	],
	"vs/editor/common/modes/modesRegistry": [
		"純文字",
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}，{1}",
	],
	"vs/editor/common/services/bulkEdit": [
		"這些檔案已同時變更: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"提供語言宣告。",
		"語言的識別碼。",
		"語言的別名名稱。",
		"與語言相關聯的副檔名。",
		"與語言相關聯的檔案名稱。",
		"與語言相關聯的檔案名稱 Glob 模式。",
		"與語言相關聯的 MIME 類型。",
		"規則運算式，符合語言檔案的第一行。",
		"檔案的相對路徑，其中該檔案包含語言組態選項。",
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
		"剪下",
		"複製",
		"貼上",
	],
	"vs/editor/contrib/comment/common/comment": [
		"切換行註解",
		"加入行註解",
		"移除行註解",
		"切換區塊註解",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"顯示編輯器內容功能表",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"尋找",
		"尋找",
		"上一個符合項",
		"下一個相符項",
		"在選取範圍中尋找",
		"關閉",
		"取代",
		"取代",
		"取代",
		"全部取代",
		"切換取代模式",
		"只會將前 999 筆結果醒目提示，但所有尋找作業會在完整文字上執行。",
		"{0} / {1}",
		"沒有結果",
	],
	"vs/editor/contrib/find/common/findController": [
		"尋找",
		"尋找下一個",
		"尋找上一個",
		"尋找下一個選取項目",
		"尋找上一個選取項目",
		"取代",
		"將選取項目加入下一個找到的相符項",
		"將選取項目加入前一個找到的相符項中",
		"將最後一個選擇項目移至下一個找到的相符項",
		"將最後一個選擇項目移至前一個找到的相符項",
		"選取所有找到的相符項目",
		"變更所有發生次數",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"展開",
		"以遞迴方式展開",
		"摺疊",
		"以遞迴方式摺疊",
		"全部摺疊",
		"全部展開",
		"Fold Level {0}",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"將文件格式化",
		"將選取項目格式化",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" - {0} 個定義",
		"移至定義",
		"在一側開啟定義",
		"預覽定義",
		"Go to Implementation",
		"Peek Implementation",
		"按一下以顯示 {0} 項定義。",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"移至下一個錯誤或警告",
		"移至上一個錯誤或警告",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"動態顯示",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"正在載入...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"以上一個值取代",
		"以下一個值取代",
	],
	"vs/editor/contrib/inspectTokens/browser/inspectTokens": [
		"Developer: Inspect Tokens",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"將行向上複製",
		"將行向下複製",
		"上移一行",
		"下移一行",
		"遞增排序行",
		"遞減排序行",
		"修剪尾端空白",
		"刪除行",
		"縮排行",
		"凸排行",
		"在上方插入行",
		"在下方插入行",
		"左邊全部刪除",
		"Delete All Right",
		"連接線",
		"轉置游標周圍的字元數",
		"轉換到大寫",
		"轉換到小寫",
	],
	"vs/editor/contrib/links/browser/links": [
		"按住 Cmd 並按一下按鍵以追蹤連結",
		"按住 CTRL 並按一下按鍵以追蹤連結",
		"抱歉，因為此連結的語式不正確，所以無法加以開啟: {0}",
		"抱歉，因為此連結遺失目標，所以無法加以開啟。",
		"開啟連結",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"在上方加入游標",
		"在下方加入游標",
		"從選取的行建立多個游標",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"觸發參數提示",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}，提示",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"顯示修正 ({0})",
		"顯示修正",
		"Quick Fix",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"移至行 {0} 和資料行 {1}",
		"移至第 {0} 行",
		"輸入介於 1 到 {0} 之間要瀏覽至的行號",
		"輸入介於 1 和 {0} 之間要瀏覽至的資料行",
		"Go to line {0}",
		"輸入行號，後接選擇性的冒號和資料行數字，以瀏覽至",
		"移至行...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"輸入您想要執行的動作名稱",
		"命令選擇區",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"請輸入您想要瀏覽至的識別項名稱",
		"移至符號...",
		"符號 ({0})",
		"模組 ({0})",
		"類別 ({0})",
		"介面 ({0})",
		"方法 ({0})",
		"函式 ({0})",
		"屬性 ({0})",
		"變數 ({0})",
		"變數 ({0})",
		"建構函式 ({0})",
		"呼叫 ({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" - {0} 個參考",
		"尋找所有參考",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"正在載入...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"無法解析檔案。",
		"{0} 個參考",
		"{0} 個參考",
		"無法預覽",
		"參考",
		"沒有結果",
		"參考",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"抱歉，無法執行重新命名。",
		"重新命名符號",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"為輸入重新命名。請鍵入新名稱，然後按 Enter 以認可。",
	],
	"vs/editor/contrib/rename/common/rename": [
		"沒有結果。",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"展開選取",
		"縮小選取",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"觸發建議",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"進一步了解...{0}",
		"{0}，建議，有詳細資料",
		"{0}，建議",
		"返回",
		"正在載入...",
		"無建議。",
		"{0}，接受",
		"{0}，建議，有詳細資料",
		"{0}，建議",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Tab Key Moves Focus",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"關閉",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Configure settings to be overridden for language modes. To override, use the language id, or language ids separated by \',\' as the key to group settings. Example:\n\"settings.overrides\" = {\n\t\t\"markdown\" = {\n\t\t\t\"editor.wrappingColumn\": 0\n\t\t},\n\t\t\"css,scss\" = {\n\t\t\t\"editor.formatOnSave\": true\n\t\t}\n}\n",
		"Override Settings",
		"提供組態設定。",
		"設定的摘要。此標籤將會在設定檔中作為分隔註解使用。",
		"組態屬性的描述。",
		"如果已設定，\'configuration.type\' 必須設定為物件",
		"\'configuration.title\' 必須是字串",
		"\'configuration.properties\' 必須是物件",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"若是 VS Code 延伸模組，則指定與延伸模組相容的 VS Code 版本。不得為 *。例如: ^0.10.5 表示與最低 VS Code 版本 0.10.5 相容。",
		"VS Code 擴充功能的發行者。",
		"VS Code 資源庫中使用的擴充功能顯示名稱。",
		"VS Code 資源庫用來將擴充功能歸類的分類。",
		"用於 VS Code Marketplace 的橫幅。",
		"VS Code Marketplace 頁首的橫幅色彩。",
		"橫幅中使用的字型色彩佈景主題。",
		"此封裝所代表的所有 VS Code 擴充功能比重。",
		"將延伸模組設為在 Marketplace 中標幟為 [預覽]。",
		"VS Code 擴充功能的啟動事件。",
		"要顯示於 Marketplace 擴充頁面資訊看板的徽章陣列。",
		"徽章映像 URL。",
		"徽章連結。",
		"徽章描述。",
		"其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。",
		"在封裝作為 VS Code 擴充功能發行前所執行的指令碼。",
		"128 x 128 像素圖示的路徑。",
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"其他可用命令如下: ",
		"已按下 ({0})。請等待第二個套索鍵...",
		"按鍵組合 ({0}, {1}) 不是命令。",
	],
	"vs/platform/message/common/message": [
		"關閉",
		"稍後",
		"取消",
	]
});