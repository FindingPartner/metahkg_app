import React from 'react'
// import config from '@Config'
// import styles from '@Styles'
// import HeaderButton from '@Components/HeaderButton'
// import t from '@Localize'

import { Image, StyleSheet, Text, View } from 'react-native'

// import { Header } from 'react-native-elements'

// import LOGO_IMG from '@assets/logo.png'

export default class AboutScreen extends React.Component {
    render() {
        return (
            <View style={viewStyles.container}>
                {/*<Header*/}
                {/*    leftComponent={<HeaderButton text={t('global.back')} icon={'ios7arrowleft'} onPressButton={_ => {*/}
                {/*        this.props.navigation.goBack()*/}
                {/*    }}/>}*/}
                {/*    centerComponent={{*/}
                {/*        text: t('global.about'),*/}
                {/*        style: styles.modalHeader.center*/}
                {/*    }}*/}
                {/*    containerStyle={{*/}
                {/*        backgroundColor: config.mainColor,*/}
                {/*    }}*/}
                {/*/>*/}
                <View style={viewStyles.textContainer}>
                    {/*<View style={viewStyles.logoView}>*/}
                    {/*    <Image style={viewStyles.logo} source={LOGO_IMG}/>*/}
                    {/*</View>*/}
                    {/*<View style={viewStyles.appNameView}>*/}
                    {/*    <Text style={viewStyles.appNameText}>asd</Text>*/}
                    {/*</View>*/}
                    {/*<View style={viewStyles.infoView}>*/}
                    {/*    <Text style={viewStyles.infoText}>123g</Text>*/}
                    {/*    <Text style={viewStyles.infoText}>Twitter: @BelinChung</Text>*/}
                    {/*    <Text style={viewStyles.infoText}>Email: belinchung@gmail.com</Text>*/}
                    {/*</View>*/}
                    <Text> 使用條款及免責聲明
                        同意接受條款
                        歡迎你使用 hihi.com 的服務。以下是 hihi.com 服務條款(下稱「服務條款」) ，我們按照條款的規定，為你提供這項服務。我們會不時修訂條款而無需特意通知你。修訂的服務條款將於公開張貼當日起即時生效，並取代舊有的條款。當你使用特定的 hihi.com 服務時，我們雙方均需要遵守為特定服務而公開張貼(並不時重新張貼)的指引及規則。這些指引和規則均構成本服務條款的一部分。

                        服務說明
                        hihi.com為用戶提供線上論壇服務 及其他相關的線上服務（以下簡稱「本服務」）。

                        你明白及同意本服務可能包括廣告，而這些廣告是hihi.com為提供本服務所必須的。

                        你亦明白及同意本服務可能包括hihi.com發出的一些通訊，例如服務公告及行政信息，而這些通訊是hihi.com服務的一部份，你並不能選擇停止接收。

                        除非另有其他明文規定，增加或強化目前本服務的任何新功能 (包括所推出的新產品)均受到本服務條款之規範。你了解也同意，本服務是依「現況」提供，任何用戶通訊或個人化設定之時效、刪除、傳遞錯誤、和未予儲存，hihi.com均不予負責。hihi.com保留權利無須事先通知你，暫停全部或部分服務以進行維修、保養、更新或其他hihi.com認為適當的工作。你必須自行取得本服務，而與此有關的第三方費用(例如互聯網供應商或按時收費)，包恬與廣告展示或傳送有關之費用，你亦需負責。此外，你必須提供取得服務所需之一切必要裝備及為此負負。

                        你的註冊義務
                        為了能使用本服務，你同意以下事項：

                        (a)依本服務註冊表之提示提供你本人正確、精確、最新及完整的資料（前開資料以下簡稱「登記資料」）， (b)維持並立即更新「登記資料」，確保其為正確、精確、最新及完整。若你提供任何錯誤、不實、過時、不完整或有誤導成分的資料，或者hihi.com有合理的理由懷疑前開資料為錯誤、不實、過時、不完整或有誤導成分的資料，hihi.com有權暫停或終止你的帳號，並拒絕你於現在和未來使用本服務之全部或一部。hihi.com十分關切所有使用者（特別是兒童）的安全及私隱。

                        私隱
                        由hihi.com保存並與你有關的「登記資料」及其他相關資料均受到個人資料條例和本公司「私隱權政策」之規管。

                        會員帳號、密碼及安全
                        完成本服務的登記程序後，密碼將以加密形式儲存於hihi.com。維持密碼及帳號的機密安全，是你的責任。

                        會員行為
                        你了解一切的資訊、資料、文字、軟件、音樂、音訊、照片、圖形、視訊、信息或其他資料（以下簡稱「內容」），無論其為公開張貼或私下傳送，均為前開「內容」提供者之責任。易言之，你，而非hihi.com，將對經由本服務上載、張貼、發送電子郵件或傳送之「內容」負完全的責任。hihi.com無法控制經由本服務而張貼之「內容」，因此不保証前開「內容」之正確性、完整性或品質。你了解使用本服務時，可能會接觸到令人不快、不適當、令人厭惡之「內容」。在任何情況下，hihi.com均不為任何「內容」負責，包含但不限於任何「內容」之任何錯誤或遺漏，以及經由本服務張貼、發送電子郵件或傳送而衍生之任何損失或損害。

                        你同意不將本服務作以下用途：

                        (a). 上載、張貼、發送電子郵件或傳送任何非法、有害、脅迫、濫用、騷擾、侵害、中傷、粗俗、猥褻、誹謗、侵害他人私隱、有害或種族歧視的或道德上令人不快的「內容」。

                        (b). 以任何方式傷害未成年人。

                        (c). 冒充任何人或機構，包含但不限於hihi.com主管、論壇領袖、主持人，或以虛偽不實的方式陳述或謊稱與任何人或機構之關係。

                        (d). 偽造標題或以其他方式操控識別資料，以偽裝經由本服務傳送之任何「內容」之來源。

                        (e). 將依據任何法律或契約或信任關係（例如由於雇用關係和依據保密合約所得知或披露之內部資料、專屬及機密資料）而無權傳送之任何「內容」加以上載、張貼或以其他方式傳送。

                        (f). 將侵害任何人之任何專利、商標、營業祕密、版權或其他專屬權利（以下簡稱「權利」）之「內容」加以上載、張貼或以其他方式傳送。

                        (g). 將任何廣告信函、促銷資料、「垃圾郵件」、「濫發信件」、「連鎖信件」、「直銷」或其他任何形式的勸誘資料加以上載、張貼或以其他方式傳送。

                        (h). 將設計目的在於干擾、破壞或限制任何電腦軟件、硬體或通訊設備功能之軟體病毒，包括但不限於「木馬屠城」病毒（Trojan Horses）、蠕蟲（worms）、「計時炸彈」(time bombs) 或刪除蠅（cancelbots）以下簡稱「病毒」)，或其他電腦代碼、檔案和程式之任何資料，加以上載、張貼、發送電子郵件或以其他方式傳送。

                        (i). 破壞正常的對話流程、造成螢幕快速移動，或使本服務其他使用者無法打字，或對其他使用者參加即時交流的能力產生負面影響。

                        (j). 干擾或破壞本服務或與本服務相連線之伺服器和網路，或不遵守於本服務連線網路之規定、程序、政策或規範。

                        (k). 故意或非故意違反任何適用的本地、國家或國際法規，以及任何具有法律效力之規定。

                        (l). 「跟蹤」或以其他方式騷擾他人。

                        (m). 蒐集和儲存其他使用者之個人資料；如果有關個人資料得到正確儲存，並根據有關的個人資料保障條例而使用，則不在此列。

                        (n). 於貼文內直接張貼成人圖片或影片。

                        你了解hihi.com並未針對「內容」事先加以審查，但hihi.com及其指定人有權（但無義務）依其自行之考量，拒絕和移除可經由本服務提供之任何「內容」。在不限制前開規定之前提下，hihi.com及其指定人有權將違反本服務條款和令人厭惡之任何「內容」加以移除。你使用任何「內容」時，包括依賴前開「內容」之正確性、完整性或實用性之情形，你同意必須自行加以評估並承擔所有風險。因此，你同意你不得依賴hihi.com創造或接受之任何「內容」，包含但不限於本服務其他之部分。

                        hihi.com是以即時上載留言的方式運作，hihi.com對所有留言的真實性、完整性及立場等，不負任何法律責任。而一切留言之言論只代表留言者個人意見，並非本網站之立場。由於hihi.com受到「即時上載留言」運作方式所規限，故不能完全監察所有留言，若讀者發現有留言出現問題，請以透過以下email通知本網站 ：admin@hihi.com

                        你必須知道並了解，hihi.com的管理團隊，只是討論區的會員。他們一切留言之言論只代表其個人意見，hihi.com沒有對他們的言論、行為及討論區管理操作事先加以審查。他們的言論、行為及討論區管理操作不代表本網站之立場。

                        你了解並同意，hihi.com依據法律或規定的要求，或基於誠信為了以下目的之合理必要範圍內，認定必須將「內容」加以保存或揭露時，得加以保存及揭露：(a)遵守法律程序，(b)執行本服務條款，(c)回應任何「內容」侵害第三人權利之主張，或 (d)保護hihi.com、其使用者及公眾之權利、財產或個人安全。

                        你了解本服務之技術處理及傳送，包含你「內容」，可能(a)經由各個網路加以傳送，且(b)為了符合及配合連線網路或裝置之技術要求而進行改變。

                        國際使用之特別警告
                        你了解網際網路的無國界性，同意遵守當地所有相關規定之網上行為及可接受「內容」之法規。你特別同意遵守關於從本地或你居住的國家或地區輸出技術性或個人資料所有相關法律。

                        於hihi.com張貼之公共資料
                        (a) 為本服務條款適用之目的，「本服務公開使用區域」係指一般公眾可以使用的區域。舉例言之，本服務可公開使用的區域包括討論區。 (b) 你選擇於本服務其他公開使用區域張貼之其他「內容」，你授予hihi.com免權利金、永久有效、不可撤銷、非專屬及可完全再授權之下述權利：在全球，使用、重製、修改、修改、重新整理、適應化、發行、翻譯「內容」、創作衍生性著作，並將前開「內容」（一部或全部）加以散佈、演示及展示，及/或放入利用任何現在已知和未來開發出之形式、媒體和科技之其他著作物當中。

                        彌償
                        由於你經由本服務提供、張貼或傳送之「內容」、你使用本服務、你與本服務連線、你違反本服務條款、或你侵害其他人任何權利因而衍生或導致任何第三人提出索賠或請求，包括但不限於律師費、行政費、法庭費用等所有費用，你同意賠償hihi.com及其分公司、分支機構、主管、代理人、聯名廠商或其他夥伴及員工，並使其免受損害。

                        服務轉售之禁止
                        本服務任何部分或本服務之使用或存取，你同意不進行重製、拷貝、出售、轉售或作任何商業目的之使用。

                        關於使用及儲存之一般措施
                        你承認關於使用本服務hihi.com得訂定一般措施及限制，包含但不限於本服務將保留短消息、佈告欄內容或其他上載「內容」之最長期間、本服務一個帳號當中可收發短消息的數量限制，以及一般特定期間內你使用本服務之次數上限（及每次使用時間之上限）。若hihi.com將本服務維持或傳送之任何訊息及其他通訊和其他「內容」刪除或未予儲存，你同意hihi.com毋須承擔任何責任。你亦同意，長時間未使用的帳號，hihi.com有權關閉。你也同意，hihi.com有權依其自行之考量，不論有否通知你，隨時變更這些一般措施及限制。

                        服務之修改
                        hihi.com有權於任何時間暫時或永久修改或終止本服務（或其任何部分），無論其通知與否。本服務任何修改、暫停或終止，你同意hihi.com對你和任何第三人均不承擔責任。

                        終止
                        你同意hihi.com得基於其自行之考量，因任何理由，包含但不限於缺乏使用，或hihi.com認為你已經違反本服務條款的明文規定及精神，終止你的密碼、帳號（或其任何部分）或本服務之使用，並將本服務內任何「內容」加以移除並刪除。hihi.com無論有否通知你，都可以依其自行之考量隨時終止本服務或其任何部分。你同意依本服務條款任何規定提供之本服務，無需事先通知你即可暫停或終止，你承認並同意，hihi.com得立即關閉或刪除你的帳號及你帳號中所有相關資料及上載「內容」，及/或禁止前開檔案和本服務之使用。此外，你同意若你被暫停或終止進入服務，或你的帳戶或有關的資料和檔案被凍結或刪除時，hihi.com對你或任何第三人均不承擔責任。

                        與廣告商進行之交易
                        你於本服務或經由本服務與廣告商進行通訊或商業往來，或參與促銷活動，包含相關商品或服務之付款及交付，以及前開交易其他任何相關條款、條件、保証或陳述，完全為你與前開廣告商之間之行為。前開任何交易或前開廣告商出現於本服務所生之任何性質的損失或損害，你同意hihi.com不予負責。

                        連結
                        本服務或第三人可提供與其他全球資訊網上之網站或資源之連結。由於hihi.com無法控制前開網站及資源，你了解並同意，前開外部網站或資源是否可供利用，hihi.com不予負責，存在或源於前開網站或資源之任何「內容」、廣告、產品或其他資料，不代表hihi.com對其贊同hihi.com亦不予負責。你進一步同意，因使用或信賴存在或經由前開任何網站或資源之任何「內容」、商品或服務所生或據稱所生之任何損害或損失，hihi.com不負任何直接或間接之責任。

                        免責聲明
                        你明確了解並同意：

                        (a) hihi.com根據本服務條款履行與服務有關的義務，只限於以合理的技能和謹慎為你提供的相關服務。服務條款並無任何內容，免除或限制hihi.com因hihi.com疏忽、欺詐或其他適用法律不能免除或限制的負責任行為，而導致的死亡或人身損害。

                        (b) 你使用本服務之風險由你個人負擔。本服務係依「現況」及「現有」基礎提供。hihi.com明示不提供任何明示或默示的擔保，包含但不限於商業適售性、特定目的之適用性及未侵害第三方的權利。

                        (c) hihi.com不保証以下事項：(i)本服務將符合你的要求，(ii)本服務不受干擾、及時提供、安全可靠或免於出錯，(iii)由本服務之使用而取得之結果為正確或可靠，(iv)你經由本服務購買或取得之任何產品、服務、資訊或其他資料將符合你的期望。

                        (d) 是否經由本服務之使用下載或取得任何資料應由你自行考量且自負風險，因前開任何資料之下載而導致你電腦系統之任何損壞或資料流失，你應負完全責任。

                        (e) 你自hihi.com或經由本服務取得之建議和資訊，無論其為書面或口頭，絕不構成本服務條款未明示規定之任何保証。

                        (f) 有關任何操作或系統錯誤引至的資料損失 (包括但不限於帖子,積分,精華,金幣,短消息等等), hihi.com恕不負責。

                        責任限制
                        你明確了解並同意，基於以下原因而造成之損失，包括但不限於利潤、商譽、使用、資料損失或其他無形損失，hihi.com不承擔任何直接、間接、附帶、特別、衍生性或懲罰性賠償（即使hihi.com已被告知前開賠償之可能性亦然）：(i)本服務之使用或無法使用，(ii)經由或透過本服務購買或取得之任何商品、資料、資訊或服務，或接收之訊息，或進行之交易所衍生之替代商品及服務之購買成本，(iii)你的傳輸或資料遭到未獲授權的存取或變造，(iv)本服務中任何第三人之聲明或行為，或(v)本服務(在此服務條款中以其他方式明確提供的除外)其他相關事宜。

                        排除及限制
                        部分管轄地不允許將某些擔保責任排除，或將附帶或衍生賠償予以限制或排除。因此第18、19條之部分限制未必適用於您。

                        通知
                        向你發出的通知得經由公告或短消息。本服務條款或其他事項有所變更時，本服務亦可能將展示通知或通知之連結。

                        著作權及著作權代理人
                        hihi.com尊重他人知識財產，亦呼籲使用者同樣尊重他人之知識財產共襄盛舉。若你認為你的著作遭到重製之情形已構成著作權之侵害，請提供以下資料予hihi.com：

                        有權代理著作權利益所有人之電子或實體簽名。

                        你主張遭到侵害之著作物描述。

                        你主張遭侵害你權利之著作物於網站所在位置之敘述。

                        你的地址、電話號碼及電子郵件地址。

                        你基於善意認為系爭之使用未經著作權人、其代理人或法律授權之聲明。

                        你了解做偽証之處罰前提下，聲明你通知所載之前開資料均為正確，且你是著作權人或經授權代理著作權人為上開聲明。


                        請將有關侵犯版權透過以下email通知我們 ：admin@hihi.com。

                        一般條款
                        本服務條款構成你與hihi.com之全部合意，並規範你對於本服務之使用，並取代你先前與hihi.com所為之任何約定。你使用相關服務、第三方內容或軟件時，亦應符合適用之額外條款及條件。本服務條款及你與hihi.com之關係，均受到本地法律所管轄，不適用其涉外法律原則。你與hihi.com均同意接受本地法院之個人及專屬管轄。hihi.com未行使或執行本服務條款任何權利或規定，不構成前開權利或權利之拋棄。倘本服務條款任何規定經管轄法院認定無效，當事人依然同意法院應努力使前開規定反映之當事人意向具備效力，且本服務條款其他規定仍應保有完整的效力及效果。你同意無論任何法令或法律是否有其他規定，本服務之使用或本服務條款所衍生或相關之任何主張或訴訟原因，應於前開主張或訴訟原因發生後一年內提出，否則永遠不得提出。

                        本服務條款之標題僅供方便而設，不具任何法律或契約效果。

                        違約
                        倘發現任何違反本服務條款之情事，請通知本公司客戶服務部。

                        私隱政策
                        私隱政策的適用範圍
                        私隱政策內容涵蓋 hihi.com（下稱“本網站”）如何處理本網站收集或接收的個人資料，包括有關用戶瀏覽本網站及使用本網站服務的資料。個人資料指可識別你身分的資料(如你的名字、電郵地址或電話號碼)，及一般非公開的資料。 私隱政策不適用於並非由本網站擁有或控制的公司政策，也不適用於並非由本網站聘用或管理的人士。

                        資料收集及運用
                        當你在本網站登記時，我們會問及你的姓名、電郵地址、出生日期及性別等；涉及某些本網站服務時，我們可能會問及你的其他個人資料，例如電話號碼及身份証明號碼等。你成功在本網站登記，並登入使用我們的服務後，我們便會知悉你的身分。 本網站會使用資料作以下一般用途：為你提供你所要求的產品或服務、改善我們的服務及與你聯絡、提供更適合你的網頁內容或廣告。

                        資料保密
                        本網站所持有的全部個人資料，除法律上有需要外，均屬保密，並只供本網站內部使用。

                        除了個人資料外，任何由登記會員，以及訪客在此網頁提出的帖文、留言或其他資料皆被視為非保密性的。 本網站保留使用、複製、公開、出版、廣播及或張貼非保密性資料於任何地方的權利。

                        私隱條例聲明的修訂
                        本網站會不時修訂私隱條例聲明，請定時瀏覽本政策以確保你了解最新之內容

                        有關私隱政策查詢
                        如果你對我們的私隱條例聲明有任何疑問或意見，請電郵至 admin@hihi.com 與我們聯絡。</Text>
                    <View style={viewStyles.copyrightView}>
                        <Text style={viewStyles.copyrightText}>Copyright © 2019 BelinChung.</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: 35
    },
    logoView: {
        width: 90,
        height: 90,
        borderColor: '#dfdfdf',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center'
    },
    logo: {
        width: 75,
        height: 75,
        alignSelf: 'center'
    },
    appNameView: {
        marginTop: 15,
    },
    appNameText: {
        fontSize: 20,
        color: '#666'
    },
    infoView: {
        flexGrow: 1,
        marginTop: 30,
        alignItems: 'center'
    },
    infoText: {
        marginTop: 10,
        color: '#666'
    },
    copyrightView: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0
    },
    copyrightText: {
        color: '#666',
        alignSelf: 'center'
    }
})
