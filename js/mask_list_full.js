const maskList = [
    { "code": "+247-####", "cc": "AC", "name_en": "Ascension", "desc_en": "", "name_ru": "Остров Вознесения", "desc_ru": "" },
    { "code": "+376-###-###", "cc": "AD", "name_en": "Andorra", "desc_en": "", "name_ru": "Андорра", "desc_ru": "" },
    { "code": "+971-5#-###-####", "cc": "AE", "name_en": "United Arab Emirates", "desc_en": "mobile", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "мобильные" },
    { "code": "+971-#-###-####", "cc": "AE", "name_en": "United Arab Emirates", "desc_en": "", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "" },
    { "code": "+93-##-###-####", "cc": "AF", "name_en": "Afghanistan", "desc_en": "", "name_ru": "Афганистан", "desc_ru": "" },
    { "code": "+1(268)###-####", "cc": "AG", "name_en": "Antigua & Barbuda", "desc_en": "", "name_ru": "Антигуа и Барбуда", "desc_ru": "" },
    { "code": "+1(264)###-####", "cc": "AI", "name_en": "Anguilla", "desc_en": "", "name_ru": "Ангилья", "desc_ru": "" },
    { "code": "+355(###)###-###", "cc": "AL", "name_en": "Albania", "desc_en": "", "name_ru": "Албания", "desc_ru": "" },
    { "code": "+374-##-###-###", "cc": "AM", "name_en": "Armenia", "desc_en": "", "name_ru": "Армения", "desc_ru": "" },
    { "code": "+599-###-####", "cc": "AN", "name_en": "Caribbean Netherlands", "desc_en": "", "name_ru": "Карибские Нидерланды", "desc_ru": "" },
    { "code": "+599-###-####", "cc": "AN", "name_en": "Netherlands Antilles", "desc_en": "", "name_ru": "Нидерландские Антильские острова", "desc_ru": "" },
    { "code": "+599-9###-####", "cc": "AN", "name_en": "Netherlands Antilles", "desc_en": "Curacao", "name_ru": "Нидерландские Антильские острова", "desc_ru": "Кюрасао" },
    { "code": "+244(###)###-###", "cc": "AO", "name_en": "Angola", "desc_en": "", "name_ru": "Ангола", "desc_ru": "" },
    { "code": "+672-1##-###", "cc": "AQ", "name_en": "Australian bases in Antarctica", "desc_en": "", "name_ru": "Австралийская антарктическая база", "desc_ru": "" },
    { "code": "+54(###)###-####", "cc": "AR", "name_en": "Argentina", "desc_en": "", "name_ru": "Аргентина", "desc_ru": "" },
    { "code": "+1(684)###-####", "cc": "AS", "name_en": "American Samoa", "desc_en": "", "name_ru": "Американское Самоа", "desc_ru": "" },
    { "code": "+43(###)###-####", "cc": "AT", "name_en": "Austria", "desc_en": "", "name_ru": "Австрия", "desc_ru": "" },
    { "code": "+61-#-####-####", "cc": "AU", "name_en": "Australia", "desc_en": "", "name_ru": "Австралия", "desc_ru": "" },
    { "code": "+297-###-####", "cc": "AW", "name_en": "Aruba", "desc_en": "", "name_ru": "Аруба", "desc_ru": "" },
    { "code": "+994-##-###-##-##", "cc": "AZ", "name_en": "Azerbaijan", "desc_en": "", "name_ru": "Азербайджан", "desc_ru": "" },
    { "code": "+387-##-#####", "cc": "BA", "name_en": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
    { "code": "+387-##-####", "cc": "BA", "name_en": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
    { "code": "+1(246)###-####", "cc": "BB", "name_en": "Barbados", "desc_en": "", "name_ru": "Барбадос", "desc_ru": "" },
    { "code": "+880-##-###-###", "cc": "BD", "name_en": "Bangladesh", "desc_en": "", "name_ru": "Бангладеш", "desc_ru": "" },
    { "code": "+32(###)###-###", "cc": "BE", "name_en": "Belgium", "desc_en": "", "name_ru": "Бельгия", "desc_ru": "" },
    { "code": "+226-##-##-####", "cc": "BF", "name_en": "Burkina Faso", "desc_en": "", "name_ru": "Буркина Фасо", "desc_ru": "" },
    { "code": "+359(###)###-###", "cc": "BG", "name_en": "Bulgaria", "desc_en": "", "name_ru": "Болгария", "desc_ru": "" },
    { "code": "+973-####-####", "cc": "BH", "name_en": "Bahrain", "desc_en": "", "name_ru": "Бахрейн", "desc_ru": "" },
    { "code": "+257-##-##-####", "cc": "BI", "name_en": "Burundi", "desc_en": "", "name_ru": "Бурунди", "desc_ru": "" },
    { "code": "+229-##-##-####", "cc": "BJ", "name_en": "Benin", "desc_en": "", "name_ru": "Бенин", "desc_ru": "" },
    { "code": "+1(441)###-####", "cc": "BM", "name_en": "Bermuda", "desc_en": "", "name_ru": "Бермудские острова", "desc_ru": "" },
    { "code": "+673-###-####", "cc": "BN", "name_en": "Brunei Darussalam", "desc_en": "", "name_ru": "Бруней-Даруссалам", "desc_ru": "" },
    { "code": "+591-#-###-####", "cc": "BO", "name_en": "Bolivia", "desc_en": "", "name_ru": "Боливия", "desc_ru": "" },
    { "code": "+55(##)####-####", "cc": "BR", "name_en": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "" },
    { "code": "+55(##)7###-####", "cc": "BR", "name_en": "Brazil", "desc_en": "mobile", "name_ru": "Бразилия", "desc_ru": "мобильные" },
    { "code": "+55(##)9####-####", "cc": "BR", "name_en": "Brazil", "desc_en": "mobile", "name_ru": "Бразилия", "desc_ru": "мобильные" },
    { "code": "+1(242)###-####", "cc": "BS", "name_en": "Bahamas", "desc_en": "", "name_ru": "Багамские Острова", "desc_ru": "" },
    { "code": "+975-17-###-###", "cc": "BT", "name_en": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
    { "code": "+975-#-###-###", "cc": "BT", "name_en": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
    { "code": "+267-##-###-###", "cc": "BW", "name_en": "Botswana", "desc_en": "", "name_ru": "Ботсвана", "desc_ru": "" },
    { "code": "+375(##)###-##-##", "cc": "BY", "name_en": "Belarus", "desc_en": "", "name_ru": "Беларусь (Белоруссия)", "desc_ru": "" },
    { "code": "+501-###-####", "cc": "BZ", "name_en": "Belize", "desc_en": "", "name_ru": "Белиз", "desc_ru": "" },
    { "code": "+243(###)###-###", "cc": "CD", "name_en": "Dem. Rep. Congo", "desc_en": "", "name_ru": "Дем. Респ. Конго (Киншаса)", "desc_ru": "" },
    { "code": "+236-##-##-####", "cc": "CF", "name_en": "Central African Republic", "desc_en": "", "name_ru": "Центральноафриканская Республика", "desc_ru": "" },
    { "code": "+242-##-###-####", "cc": "CG", "name_en": "Congo (Brazzaville)", "desc_en": "", "name_ru": "Конго (Браззавиль)", "desc_ru": "" },
    { "code": "+41-##-###-####", "cc": "CH", "name_en": "Switzerland", "desc_en": "", "name_ru": "Швейцария", "desc_ru": "" },
    { "code": "+225-##-###-###", "cc": "CI", "name_en": "Cote d’Ivoire (Ivory Coast)", "desc_en": "", "name_ru": "Кот-д’Ивуар", "desc_ru": "" },
    { "code": "+682-##-###", "cc": "CK", "name_en": "Cook Islands", "desc_en": "", "name_ru": "Острова Кука", "desc_ru": "" },
    { "code": "+56-#-####-####", "cc": "CL", "name_en": "Chile", "desc_en": "", "name_ru": "Чили", "desc_ru": "" },
    { "code": "+237-####-####", "cc": "CM", "name_en": "Cameroon", "desc_en": "", "name_ru": "Камерун", "desc_ru": "" },
    { "code": "+86(###)####-####", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "code": "+86(###)####-###", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "code": "+86-##-#####-#####", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "code": "+57(###)###-####", "cc": "CO", "name_en": "Colombia", "desc_en": "", "name_ru": "Колумбия", "desc_ru": "" },
    { "code": "+506-####-####", "cc": "CR", "name_en": "Costa Rica", "desc_en": "", "name_ru": "Коста-Рика", "desc_ru": "" },
    { "code": "+53-#-###-####", "cc": "CU", "name_en": "Cuba", "desc_en": "", "name_ru": "Куба", "desc_ru": "" },
    { "code": "+238(###)##-##", "cc": "CV", "name_en": "Cape Verde", "desc_en": "", "name_ru": "Кабо-Верде", "desc_ru": "" },
    { "code": "+599-###-####", "cc": "CW", "name_en": "Curacao", "desc_en": "", "name_ru": "Кюрасао", "desc_ru": "" },
    { "code": "+357-##-###-###", "cc": "CY", "name_en": "Cyprus", "desc_en": "", "name_ru": "Кипр", "desc_ru": "" },
    { "code": "+420(###)###-###", "cc": "CZ", "name_en": "Czech Republic", "desc_en": "", "name_ru": "Чехия", "desc_ru": "" },
    { "code": "+49(####)###-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+49(###)###-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+49(###)##-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+49(###)##-###", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+49(###)##-##", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+49-###-###", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "code": "+253-##-##-##-##", "cc": "DJ", "name_en": "Djibouti", "desc_en": "", "name_ru": "Джибути", "desc_ru": "" },
    { "code": "+45-##-##-##-##", "cc": "DK", "name_en": "Denmark", "desc_en": "", "name_ru": "Дания", "desc_ru": "" },
    { "code": "+1(767)###-####", "cc": "DM", "name_en": "Dominica", "desc_en": "", "name_ru": "Доминика", "desc_ru": "" },
    { "code": "+1(809)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "code": "+1(829)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "code": "+1(849)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "code": "+213-##-###-####", "cc": "DZ", "name_en": "Algeria", "desc_en": "", "name_ru": "Алжир", "desc_ru": "" },
    { "code": "+593-##-###-####", "cc": "EC", "name_en": "Ecuador ", "desc_en": "mobile", "name_ru": "Эквадор ", "desc_ru": "мобильные" },
    { "code": "+593-#-###-####", "cc": "EC", "name_en": "Ecuador", "desc_en": "", "name_ru": "Эквадор", "desc_ru": "" },
    { "code": "+372-####-####", "cc": "EE", "name_en": "Estonia ", "desc_en": "mobile", "name_ru": "Эстония ", "desc_ru": "мобильные" },
    { "code": "+372-###-####", "cc": "EE", "name_en": "Estonia", "desc_en": "", "name_ru": "Эстония", "desc_ru": "" },
    { "code": "+20(###)###-####", "cc": "EG", "name_en": "Egypt", "desc_en": "", "name_ru": "Египет", "desc_ru": "" },
    { "code": "+291-#-###-###", "cc": "ER", "name_en": "Eritrea", "desc_en": "", "name_ru": "Эритрея", "desc_ru": "" },
    { "code": "+34(###)###-###", "cc": "ES", "name_en": "Spain", "desc_en": "", "name_ru": "Испания", "desc_ru": "" },
    { "code": "+251-##-###-####", "cc": "ET", "name_en": "Ethiopia", "desc_en": "", "name_ru": "Эфиопия", "desc_ru": "" },
    { "code": "+358(###)###-##-##", "cc": "FI", "name_en": "Finland", "desc_en": "", "name_ru": "Финляндия", "desc_ru": "" },
    { "code": "+679-##-#####", "cc": "FJ", "name_en": "Fiji", "desc_en": "", "name_ru": "Фиджи", "desc_ru": "" },
    { "code": "+500-#####", "cc": "FK", "name_en": "Falkland Islands", "desc_en": "", "name_ru": "Фолклендские острова", "desc_ru": "" },
    { "code": "+691-###-####", "cc": "FM", "name_en": "F.S. Micronesia", "desc_en": "", "name_ru": "Ф.Ш. Микронезии", "desc_ru": "" },
    { "code": "+298-###-###", "cc": "FO", "name_en": "Faroe Islands", "desc_en": "", "name_ru": "Фарерские острова", "desc_ru": "" },
    { "code": "+262-#####-####", "cc": "FR", "name_en": "Mayotte", "desc_en": "", "name_ru": "Майотта", "desc_ru": "" },
    { "code": "+33(###)###-###", "cc": "FR", "name_en": "France", "desc_en": "", "name_ru": "Франция", "desc_ru": "" },
    { "code": "+508-##-####", "cc": "FR", "name_en": "St Pierre & Miquelon", "desc_en": "", "name_ru": "Сен-Пьер и Микелон", "desc_ru": "" },
    { "code": "+590(###)###-###", "cc": "FR", "name_en": "Guadeloupe", "desc_en": "", "name_ru": "Гваделупа", "desc_ru": "" },
    { "code": "+241-#-##-##-##", "cc": "GA", "name_en": "Gabon", "desc_en": "", "name_ru": "Габон", "desc_ru": "" },
    { "code": "+1(473)###-####", "cc": "GD", "name_en": "Grenada", "desc_en": "", "name_ru": "Гренада", "desc_ru": "" },
    { "code": "+995(###)###-###", "cc": "GE", "name_en": "Rep. of Georgia", "desc_en": "", "name_ru": "Грузия", "desc_ru": "" },
    { "code": "+594-#####-####", "cc": "GF", "name_en": "Guiana (French)", "desc_en": "", "name_ru": "Фр. Гвиана", "desc_ru": "" },
    { "code": "+233(###)###-###", "cc": "GH", "name_en": "Ghana", "desc_en": "", "name_ru": "Гана", "desc_ru": "" },
    { "code": "+350-###-#####", "cc": "GI", "name_en": "Gibraltar", "desc_en": "", "name_ru": "Гибралтар", "desc_ru": "" },
    { "code": "+299-##-##-##", "cc": "GL", "name_en": "Greenland", "desc_en": "", "name_ru": "Гренландия", "desc_ru": "" },
    { "code": "+220(###)##-##", "cc": "GM", "name_en": "Gambia", "desc_en": "", "name_ru": "Гамбия", "desc_ru": "" },
    { "code": "+224-##-###-###", "cc": "GN", "name_en": "Guinea", "desc_en": "", "name_ru": "Гвинея", "desc_ru": "" },
    { "code": "+240-##-###-####", "cc": "GQ", "name_en": "Equatorial Guinea", "desc_en": "", "name_ru": "Экваториальная Гвинея", "desc_ru": "" },
    { "code": "+30(###)###-####", "cc": "GR", "name_en": "Greece", "desc_en": "", "name_ru": "Греция", "desc_ru": "" },
    { "code": "+502-#-###-####", "cc": "GT", "name_en": "Guatemala", "desc_en": "", "name_ru": "Гватемала", "desc_ru": "" },
    { "code": "+1(671)###-####", "cc": "GU", "name_en": "Guam", "desc_en": "", "name_ru": "Гуам", "desc_ru": "" },
    { "code": "+245-#-######", "cc": "GW", "name_en": "Guinea-Bissau", "desc_en": "", "name_ru": "Гвинея-Бисау", "desc_ru": "" },
    { "code": "+592-###-####", "cc": "GY", "name_en": "Guyana", "desc_en": "", "name_ru": "Гайана", "desc_ru": "" },
    { "code": "+852-####-####", "cc": "HK", "name_en": "Hong Kong", "desc_en": "", "name_ru": "Гонконг", "desc_ru": "" },
    { "code": "+504-####-####", "cc": "HN", "name_en": "Honduras", "desc_en": "", "name_ru": "Гондурас", "desc_ru": "" },
    { "code": "+385-##-###-###", "cc": "HR", "name_en": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
    { "code": "+509-##-##-####", "cc": "HT", "name_en": "Haiti", "desc_en": "", "name_ru": "Гаити", "desc_ru": "" },
    { "code": "+36(###)###-###", "cc": "HU", "name_en": "Hungary", "desc_en": "", "name_ru": "Венгрия", "desc_ru": "" },
    { "code": "+62(8##)###-####", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "code": "+62-##-###-##", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "code": "+62-##-###-###", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "code": "+62-##-###-####", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "code": "+62(8##)###-###", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "code": "+62(8##)###-##-###", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "code": "+353(###)###-###", "cc": "IE", "name_en": "Ireland", "desc_en": "", "name_ru": "Ирландия", "desc_ru": "" },
    { "code": "+972-5#-###-####", "cc": "IL", "name_en": "Israel ", "desc_en": "mobile", "name_ru": "Израиль ", "desc_ru": "мобильные" },
    { "code": "+972-#-###-####", "cc": "IL", "name_en": "Israel", "desc_en": "", "name_ru": "Израиль", "desc_ru": "" },
    { "code": "+91(####)###-###", "cc": "IN", "name_en": "India", "desc_en": "", "name_ru": "Индия", "desc_ru": "" },
    { "code": "+246-###-####", "cc": "IO", "name_en": "Diego Garcia", "desc_en": "", "name_ru": "Диего-Гарсия", "desc_ru": "" },
    { "code": "+964(###)###-####", "cc": "IQ", "name_en": "Iraq", "desc_en": "", "name_ru": "Ирак", "desc_ru": "" },
    { "code": "+98(###)###-####", "cc": "IR", "name_en": "Iran", "desc_en": "", "name_ru": "Иран", "desc_ru": "" },
    { "code": "+354-###-####", "cc": "IS", "name_en": "Iceland", "desc_en": "", "name_ru": "Исландия", "desc_ru": "" },
    { "code": "+39(###)####-###", "cc": "IT", "name_en": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "" },
    { "code": "+1(876)###-####", "cc": "JM", "name_en": "Jamaica", "desc_en": "", "name_ru": "Ямайка", "desc_ru": "" },
    { "code": "+962-#-####-####", "cc": "JO", "name_en": "Jordan", "desc_en": "", "name_ru": "Иордания", "desc_ru": "" },
    { "code": "+81-##-####-####", "cc": "JP", "name_en": "Japan ", "desc_en": "mobile", "name_ru": "Япония ", "desc_ru": "мобильные" },
    { "code": "+81(###)###-###", "cc": "JP", "name_en": "Japan", "desc_en": "", "name_ru": "Япония", "desc_ru": "" },
    { "code": "+254-###-######", "cc": "KE", "name_en": "Kenya", "desc_en": "", "name_ru": "Кения", "desc_ru": "" },
    { "code": "+996(###)###-###", "cc": "KG", "name_en": "Kyrgyzstan", "desc_en": "", "name_ru": "Киргизия", "desc_ru": "" },
    { "code": "+855-##-###-###", "cc": "KH", "name_en": "Cambodia", "desc_en": "", "name_ru": "Камбоджа", "desc_ru": "" },
    { "code": "+686-##-###", "cc": "KI", "name_en": "Kiribati", "desc_en": "", "name_ru": "Кирибати", "desc_ru": "" },
    { "code": "+269-##-#####", "cc": "KM", "name_en": "Comoros", "desc_en": "", "name_ru": "Коморы", "desc_ru": "" },
    { "code": "+1(869)###-####", "cc": "KN", "name_en": "Saint Kitts & Nevis", "desc_en": "", "name_ru": "Сент-Китс и Невис", "desc_ru": "" },
    { "code": "+850-191-###-####", "cc": "KP", "name_en": "DPR Korea (North) ", "desc_en": "mobile", "name_ru": "Корейская НДР ", "desc_ru": "мобильные" },
    { "code": "+850-##-###-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "code": "+850-###-####-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "code": "+850-###-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "code": "+850-####-####", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "code": "+850-####-#############", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "code": "+82-##-###-####", "cc": "KR", "name_en": "Korea (South)", "desc_en": "", "name_ru": "Респ. Корея", "desc_ru": "" },
    { "code": "+965-####-####", "cc": "KW", "name_en": "Kuwait", "desc_en": "", "name_ru": "Кувейт", "desc_ru": "" },
    { "code": "+1(345)###-####", "cc": "KY", "name_en": "Cayman Islands", "desc_en": "", "name_ru": "Каймановы острова", "desc_ru": "" },
    { "code": "+7(6##)###-##-##", "cc": "KZ", "name_en": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
    { "code": "+7(7##)###-##-##", "cc": "KZ", "name_en": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
    { "code": "+856(20##)###-###", "cc": "LA", "name_en": "Laos ", "desc_en": "mobile", "name_ru": "Лаос ", "desc_ru": "мобильные" },
    { "code": "+856-##-###-###", "cc": "LA", "name_en": "Laos", "desc_en": "", "name_ru": "Лаос", "desc_ru": "" },
    { "code": "+961-##-###-###", "cc": "LB", "name_en": "Lebanon ", "desc_en": "mobile", "name_ru": "Ливан ", "desc_ru": "мобильные" },
    { "code": "+961-#-###-###", "cc": "LB", "name_en": "Lebanon", "desc_en": "", "name_ru": "Ливан", "desc_ru": "" },
    { "code": "+1(758)###-####", "cc": "LC", "name_en": "Saint Lucia", "desc_en": "", "name_ru": "Сент-Люсия", "desc_ru": "" },
    { "code": "+423(###)###-####", "cc": "LI", "name_en": "Liechtenstein", "desc_en": "", "name_ru": "Лихтенштейн", "desc_ru": "" },
    { "code": "+94-##-###-####", "cc": "LK", "name_en": "Sri Lanka", "desc_en": "", "name_ru": "Шри-Ланка", "desc_ru": "" },
    { "code": "+231-##-###-###", "cc": "LR", "name_en": "Liberia", "desc_en": "", "name_ru": "Либерия", "desc_ru": "" },
    { "code": "+266-#-###-####", "cc": "LS", "name_en": "Lesotho", "desc_en": "", "name_ru": "Лесото", "desc_ru": "" },
    { "code": "+370(###)##-###", "cc": "LT", "name_en": "Lithuania", "desc_en": "", "name_ru": "Литва", "desc_ru": "" },
    { "code": "+352(###)###-###", "cc": "LU", "name_en": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
    { "code": "+371-##-###-###", "cc": "LV", "name_en": "Latvia", "desc_en": "", "name_ru": "Латвия", "desc_ru": "" },
    { "code": "+218-##-###-###", "cc": "LY", "name_en": "Libya", "desc_en": "", "name_ru": "Ливия", "desc_ru": "" },
    { "code": "+218-21-###-####", "cc": "LY", "name_en": "Libya", "desc_en": "Tripoli", "name_ru": "Ливия", "desc_ru": "Триполи" },
    { "code": "+212-##-####-###", "cc": "MA", "name_en": "Morocco", "desc_en": "", "name_ru": "Марокко", "desc_ru": "" },
    { "code": "+377(###)###-###", "cc": "MC", "name_en": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
    { "code": "+377-##-###-###", "cc": "MC", "name_en": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
    { "code": "+373-####-####", "cc": "MD", "name_en": "Moldova", "desc_en": "", "name_ru": "Молдова", "desc_ru": "" },
    { "code": "+382-##-###-###", "cc": "ME", "name_en": "Montenegro", "desc_en": "", "name_ru": "Черногория", "desc_ru": "" },
    { "code": "+261-##-##-#####", "cc": "MG", "name_en": "Madagascar", "desc_en": "", "name_ru": "Мадагаскар", "desc_ru": "" },
    { "code": "+692-###-####", "cc": "MH", "name_en": "Marshall Islands", "desc_en": "", "name_ru": "Маршалловы Острова", "desc_ru": "" },
    { "code": "+389-##-###-###", "cc": "MK", "name_en": "Republic of Macedonia", "desc_en": "", "name_ru": "Респ. Македония", "desc_ru": "" },
    { "code": "+223-##-##-####", "cc": "ML", "name_en": "Mali", "desc_en": "", "name_ru": "Мали", "desc_ru": "" },
    { "code": "+95-##-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "code": "+95-#-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "code": "+95-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "code": "+976-##-##-####", "cc": "MN", "name_en": "Mongolia", "desc_en": "", "name_ru": "Монголия", "desc_ru": "" },
    { "code": "+853-####-####", "cc": "MO", "name_en": "Macau", "desc_en": "", "name_ru": "Макао", "desc_ru": "" },
    { "code": "+1(670)###-####", "cc": "MP", "name_en": "Northern Mariana Islands", "desc_en": "", "name_ru": "Северные Марианские острова Сайпан", "desc_ru": "" },
    { "code": "+596(###)##-##-##", "cc": "MQ", "name_en": "Martinique", "desc_en": "", "name_ru": "Мартиника", "desc_ru": "" },
    { "code": "+222-##-##-####", "cc": "MR", "name_en": "Mauritania", "desc_en": "", "name_ru": "Мавритания", "desc_ru": "" },
    { "code": "+1(664)###-####", "cc": "MS", "name_en": "Montserrat", "desc_en": "", "name_ru": "Монтсеррат", "desc_ru": "" },
    { "code": "+356-####-####", "cc": "MT", "name_en": "Malta", "desc_en": "", "name_ru": "Мальта", "desc_ru": "" },
    { "code": "+230-###-####", "cc": "MU", "name_en": "Mauritius", "desc_en": "", "name_ru": "Маврикий", "desc_ru": "" },
    { "code": "+960-###-####", "cc": "MV", "name_en": "Maldives", "desc_en": "", "name_ru": "Мальдивские острова", "desc_ru": "" },
    { "code": "+265-1-###-###", "cc": "MW", "name_en": "Malawi", "desc_en": "Telecom Ltd", "name_ru": "Малави", "desc_ru": "Telecom Ltd" },
    { "code": "+265-#-####-####", "cc": "MW", "name_en": "Malawi", "desc_en": "", "name_ru": "Малави", "desc_ru": "" },
    { "code": "+52(###)###-####", "cc": "MX", "name_en": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
    { "code": "+52-##-##-####", "cc": "MX", "name_en": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
    { "code": "+60-##-###-####", "cc": "MY", "name_en": "Malaysia ", "desc_en": "mobile", "name_ru": "Малайзия ", "desc_ru": "мобильные" },
    { "code": "+60(###)###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "code": "+60-##-###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "code": "+60-#-###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "code": "+258-##-###-###", "cc": "MZ", "name_en": "Mozambique", "desc_en": "", "name_ru": "Мозамбик", "desc_ru": "" },
    { "code": "+264-##-###-####", "cc": "NA", "name_en": "Namibia", "desc_en": "", "name_ru": "Намибия", "desc_ru": "" },
    { "code": "+687-##-####", "cc": "NC", "name_en": "New Caledonia", "desc_en": "", "name_ru": "Новая Каледония", "desc_ru": "" },
    { "code": "+227-##-##-####", "cc": "NE", "name_en": "Niger", "desc_en": "", "name_ru": "Нигер", "desc_ru": "" },
    { "code": "+672-3##-###", "cc": "NF", "name_en": "Norfolk Island", "desc_en": "", "name_ru": "Норфолк (остров)", "desc_ru": "" },
    { "code": "+234(###)###-####", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "code": "+234-##-###-###", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "code": "+234-##-###-##", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "code": "+234(###)###-####", "cc": "NG", "name_en": "Nigeria ", "desc_en": "mobile", "name_ru": "Нигерия ", "desc_ru": "мобильные" },
    { "code": "+505-####-####", "cc": "NI", "name_en": "Nicaragua", "desc_en": "", "name_ru": "Никарагуа", "desc_ru": "" },
    { "code": "+31-##-###-####", "cc": "NL", "name_en": "Netherlands", "desc_en": "", "name_ru": "Нидерланды", "desc_ru": "" },
    { "code": "+47(###)##-###", "cc": "NO", "name_en": "Norway", "desc_en": "", "name_ru": "Норвегия", "desc_ru": "" },
    { "code": "+977-##-###-###", "cc": "NP", "name_en": "Nepal", "desc_en": "", "name_ru": "Непал", "desc_ru": "" },
    { "code": "+674-###-####", "cc": "NR", "name_en": "Nauru", "desc_en": "", "name_ru": "Науру", "desc_ru": "" },
    { "code": "+683-####", "cc": "NU", "name_en": "Niue", "desc_en": "", "name_ru": "Ниуэ", "desc_ru": "" },
    { "code": "+64(###)###-###", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "code": "+64-##-###-###", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "code": "+64(###)###-####", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "code": "+968-##-###-###", "cc": "OM", "name_en": "Oman", "desc_en": "", "name_ru": "Оман", "desc_ru": "" },
    { "code": "+507-###-####", "cc": "PA", "name_en": "Panama", "desc_en": "", "name_ru": "Панама", "desc_ru": "" },
    { "code": "+51(###)###-###", "cc": "PE", "name_en": "Peru", "desc_en": "", "name_ru": "Перу", "desc_ru": "" },
    { "code": "+689-##-##-##", "cc": "PF", "name_en": "French Polynesia", "desc_en": "", "name_ru": "Французская Полинезия (Таити)", "desc_ru": "" },
    { "code": "+675(###)##-###", "cc": "PG", "name_en": "Papua New Guinea", "desc_en": "", "name_ru": "Папуа-Новая Гвинея", "desc_ru": "" },
    { "code": "+63(###)###-####", "cc": "PH", "name_en": "Philippines", "desc_en": "", "name_ru": "Филиппины", "desc_ru": "" },
    { "code": "+92(###)###-####", "cc": "PK", "name_en": "Pakistan", "desc_en": "", "name_ru": "Пакистан", "desc_ru": "" },
    { "code": "+48(###)###-###", "cc": "PL", "name_en": "Poland", "desc_en": "", "name_ru": "Польша", "desc_ru": "" },
    { "code": "+970-##-###-####", "cc": "PS", "name_en": "Palestine", "desc_en": "", "name_ru": "Палестина", "desc_ru": "" },
    { "code": "+351-##-###-####", "cc": "PT", "name_en": "Portugal", "desc_en": "", "name_ru": "Португалия", "desc_ru": "" },
    { "code": "+680-###-####", "cc": "PW", "name_en": "Palau", "desc_en": "", "name_ru": "Палау", "desc_ru": "" },
    { "code": "+595(###)###-###", "cc": "PY", "name_en": "Paraguay", "desc_en": "", "name_ru": "Парагвай", "desc_ru": "" },
    { "code": "+974-####-####", "cc": "QA", "name_en": "Qatar", "desc_en": "", "name_ru": "Катар", "desc_ru": "" },
    { "code": "+262-#####-####", "cc": "RE", "name_en": "Reunion", "desc_en": "", "name_ru": "Реюньон", "desc_ru": "" },
    { "code": "+40-##-###-####", "cc": "RO", "name_en": "Romania", "desc_en": "", "name_ru": "Румыния", "desc_ru": "" },
    { "code": "+381-##-###-####", "cc": "RS", "name_en": "Serbia", "desc_en": "", "name_ru": "Сербия", "desc_ru": "" },
    { "code": "+7(###)###-##-##", "cc": "RU", "name_en": "Russia", "desc_en": "", "name_ru": "Россия", "desc_ru": "" },
    { "code": "+250(###)###-###", "cc": "RW", "name_en": "Rwanda", "desc_en": "", "name_ru": "Руанда", "desc_ru": "" },
    { "code": "+966-5-####-####", "cc": "SA", "name_en": "Saudi Arabia ", "desc_en": "mobile", "name_ru": "Саудовская Аравия ", "desc_ru": "мобильные" },
    { "code": "+966-#-###-####", "cc": "SA", "name_en": "Saudi Arabia", "desc_en": "", "name_ru": "Саудовская Аравия", "desc_ru": "" },
    { "code": "+677-###-####", "cc": "SB", "name_en": "Solomon Islands ", "desc_en": "mobile", "name_ru": "Соломоновы Острова ", "desc_ru": "мобильные" },
    { "code": "+677-#####", "cc": "SB", "name_en": "Solomon Islands", "desc_en": "", "name_ru": "Соломоновы Острова", "desc_ru": "" },
    { "code": "+248-#-###-###", "cc": "SC", "name_en": "Seychelles", "desc_en": "", "name_ru": "Сейшелы", "desc_ru": "" },
    { "code": "+249-##-###-####", "cc": "SD", "name_en": "Sudan", "desc_en": "", "name_ru": "Судан", "desc_ru": "" },
    { "code": "+46-##-###-####", "cc": "SE", "name_en": "Sweden", "desc_en": "", "name_ru": "Швеция", "desc_ru": "" },
    { "code": "+65-####-####", "cc": "SG", "name_en": "Singapore", "desc_en": "", "name_ru": "Сингапур", "desc_ru": "" },
    { "code": "+290-####", "cc": "SH", "name_en": "Saint Helena", "desc_en": "", "name_ru": "Остров Святой Елены", "desc_ru": "" },
    { "code": "+290-####", "cc": "SH", "name_en": "Tristan da Cunha", "desc_en": "", "name_ru": "Тристан-да-Кунья", "desc_ru": "" },
    { "code": "+386-##-###-###", "cc": "SI", "name_en": "Slovenia", "desc_en": "", "name_ru": "Словения", "desc_ru": "" },
    { "code": "+421(###)###-###", "cc": "SK", "name_en": "Slovakia", "desc_en": "", "name_ru": "Словакия", "desc_ru": "" },
    { "code": "+232-##-######", "cc": "SL", "name_en": "Sierra Leone", "desc_en": "", "name_ru": "Сьерра-Леоне", "desc_ru": "" },
    { "code": "+378-####-######", "cc": "SM", "name_en": "San Marino", "desc_en": "", "name_ru": "Сан-Марино", "desc_ru": "" },
    { "code": "+221-##-###-####", "cc": "SN", "name_en": "Senegal", "desc_en": "", "name_ru": "Сенегал", "desc_ru": "" },
    { "code": "+252-##-###-###", "cc": "SO", "name_en": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
    { "code": "+252-#-###-###", "cc": "SO", "name_en": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
    { "code": "+252-#-###-###", "cc": "SO", "name_en": "Somalia ", "desc_en": "mobile", "name_ru": "Сомали ", "desc_ru": "мобильные" },
    { "code": "+597-###-####", "cc": "SR", "name_en": "Suriname ", "desc_en": "mobile", "name_ru": "Суринам ", "desc_ru": "мобильные" },
    { "code": "+597-###-###", "cc": "SR", "name_en": "Suriname", "desc_en": "", "name_ru": "Суринам", "desc_ru": "" },
    { "code": "+211-##-###-####", "cc": "SS", "name_en": "South Sudan", "desc_en": "", "name_ru": "Южный Судан", "desc_ru": "" },
    { "code": "+239-##-#####", "cc": "ST", "name_en": "Sao Tome and Principe", "desc_en": "", "name_ru": "Сан-Томе и Принсипи", "desc_ru": "" },
    { "code": "+503-##-##-####", "cc": "SV", "name_en": "El Salvador", "desc_en": "", "name_ru": "Сальвадор", "desc_ru": "" },
    { "code": "+1(721)###-####", "cc": "SX", "name_en": "Sint Maarten", "desc_en": "", "name_ru": "Синт-Маартен", "desc_ru": "" },
    { "code": "+963-##-####-###", "cc": "SY", "name_en": "Syrian Arab Republic", "desc_en": "", "name_ru": "Сирийская арабская республика", "desc_ru": "" },
    { "code": "+268-##-##-####", "cc": "SZ", "name_en": "Swaziland", "desc_en": "", "name_ru": "Свазиленд", "desc_ru": "" },
    { "code": "+1(649)###-####", "cc": "TC", "name_en": "Turks & Caicos", "desc_en": "", "name_ru": "Тёркс и Кайкос", "desc_ru": "" },
    { "code": "+235-##-##-##-##", "cc": "TD", "name_en": "Chad", "desc_en": "", "name_ru": "Чад", "desc_ru": "" },
    { "code": "+228-##-###-###", "cc": "TG", "name_en": "Togo", "desc_en": "", "name_ru": "Того", "desc_ru": "" },
    { "code": "+66-##-###-####", "cc": "TH", "name_en": "Thailand ", "desc_en": "mobile", "name_ru": "Таиланд ", "desc_ru": "мобильные" },
    { "code": "+66-##-###-###", "cc": "TH", "name_en": "Thailand", "desc_en": "", "name_ru": "Таиланд", "desc_ru": "" },
    { "code": "+992-##-###-####", "cc": "TJ", "name_en": "Tajikistan", "desc_en": "", "name_ru": "Таджикистан", "desc_ru": "" },
    { "code": "+690-####", "cc": "TK", "name_en": "Tokelau", "desc_en": "", "name_ru": "Токелау", "desc_ru": "" },
    { "code": "+670-###-####", "cc": "TL", "name_en": "East Timor", "desc_en": "", "name_ru": "Восточный Тимор", "desc_ru": "" },
    { "code": "+670-77#-#####", "cc": "TL", "name_en": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
    { "code": "+670-78#-#####", "cc": "TL", "name_en": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
    { "code": "+993-#-###-####", "cc": "TM", "name_en": "Turkmenistan", "desc_en": "", "name_ru": "Туркменистан", "desc_ru": "" },
    { "code": "+216-##-###-###", "cc": "TN", "name_en": "Tunisia", "desc_en": "", "name_ru": "Тунис", "desc_ru": "" },
    { "code": "+676-#####", "cc": "TO", "name_en": "Tonga", "desc_en": "", "name_ru": "Тонга", "desc_ru": "" },
    { "code": "+90(###)###-####", "cc": "TR", "name_en": "Turkey", "desc_en": "", "name_ru": "Турция", "desc_ru": "" },
    { "code": "+1(868)###-####", "cc": "TT", "name_en": "Trinidad & Tobago", "desc_en": "", "name_ru": "Тринидад и Тобаго", "desc_ru": "" },
    { "code": "+688-90####", "cc": "TV", "name_en": "Tuvalu ", "desc_en": "mobile", "name_ru": "Тувалу ", "desc_ru": "мобильные" },
    { "code": "+688-2####", "cc": "TV", "name_en": "Tuvalu", "desc_en": "", "name_ru": "Тувалу", "desc_ru": "" },
    { "code": "+886-#-####-####", "cc": "TW", "name_en": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
    { "code": "+886-####-####", "cc": "TW", "name_en": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
    { "code": "+255-##-###-####", "cc": "TZ", "name_en": "Tanzania", "desc_en": "", "name_ru": "Танзания", "desc_ru": "" },
    { "code": "+380(##)###-##-##", "cc": "UA", "name_en": "Ukraine", "desc_en": "", "name_ru": "Украина", "desc_ru": "" },
    { "code": "+256(###)###-###", "cc": "UG", "name_en": "Uganda", "desc_en": "", "name_ru": "Уганда", "desc_ru": "" },
    { "code": "+44-##-####-####", "cc": "UK", "name_en": "United Kingdom", "desc_en": "", "name_ru": "Великобритания", "desc_ru": "" },
    { "code": "+598-#-###-##-##", "cc": "UY", "name_en": "Uruguay", "desc_en": "", "name_ru": "Уругвай", "desc_ru": "" },
    { "code": "+998-##-###-####", "cc": "UZ", "name_en": "Uzbekistan", "desc_en": "", "name_ru": "Узбекистан", "desc_ru": "" },
    { "code": "+39-6-698-#####", "cc": "VA", "name_en": "Vatican City", "desc_en": "", "name_ru": "Ватикан", "desc_ru": "" },
    { "code": "+1(784)###-####", "cc": "VC", "name_en": "Saint Vincent & the Grenadines", "desc_en": "", "name_ru": "Сент-Винсент и Гренадины", "desc_ru": "" },
    { "code": "+58(###)###-####", "cc": "VE", "name_en": "Venezuela", "desc_en": "", "name_ru": "Венесуэла", "desc_ru": "" },
    { "code": "+1(284)###-####", "cc": "VG", "name_en": "British Virgin Islands", "desc_en": "", "name_ru": "Британские Виргинские острова", "desc_ru": "" },
    { "code": "+1(340)###-####", "cc": "VI", "name_en": "US Virgin Islands", "desc_en": "", "name_ru": "Американские Виргинские острова", "desc_ru": "" },
    { "code": "+84-##-####-###", "cc": "VN", "name_en": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
    { "code": "+84(###)####-###", "cc": "VN", "name_en": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
    { "code": "+678-##-#####", "cc": "VU", "name_en": "Vanuatu ", "desc_en": "mobile", "name_ru": "Вануату ", "desc_ru": "мобильные" },
    { "code": "+678-#####", "cc": "VU", "name_en": "Vanuatu", "desc_en": "", "name_ru": "Вануату", "desc_ru": "" },
    { "code": "+681-##-####", "cc": "WF", "name_en": "Wallis and Futuna", "desc_en": "", "name_ru": "Уоллис и Футуна", "desc_ru": "" },
    { "code": "+685-##-####", "cc": "WS", "name_en": "Samoa", "desc_en": "", "name_ru": "Самоа", "desc_ru": "" },
    { "code": "+967-###-###-###", "cc": "YE", "name_en": "Yemen ", "desc_en": "mobile", "name_ru": "Йемен ", "desc_ru": "мобильные" },
    { "code": "+967-#-###-###", "cc": "YE", "name_en": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
    { "code": "+967-##-###-###", "cc": "YE", "name_en": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
    { "code": "+27-##-###-####", "cc": "ZA", "name_en": "South Africa", "desc_en": "", "name_ru": "Южно-Африканская Респ.", "desc_ru": "" },
    { "code": "+260-##-###-####", "cc": "ZM", "name_en": "Zambia", "desc_en": "", "name_ru": "Замбия", "desc_ru": "" },
    { "code": "+263-#-######", "cc": "ZW", "name_en": "Zimbabwe", "desc_en": "", "name_ru": "Зимбабве", "desc_ru": "" },
    { "code": "+1(###)###-####", "cc": ["US", "CA"], "name_en": "USA and Canada", "desc_en": "", "name_ru": "США и Канада", "desc_ru": "" }
]