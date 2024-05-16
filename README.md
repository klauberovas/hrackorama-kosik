# hrackorama-kosik`

## State lifting v praxi

Hlavní stav aplikace, který sleduje produkty v košíku, je udržován v nadřazené komponentě `App`. Tato komponenta také definuje funkci `handleAmountChange`, která aktualizuje stav `cartProducts`, když se změní množství konkrétního produktu.

Komponenta `Cart` zobrazuje celkové množství produktů v košíku a seznam všech produktů. Každý produkt je reprezentován komponentou `CartItem`, která zobrazuje detaily produktu a umožňuje uživateli měnit množství daného produktu.

Komponenta `Amount` umožňuje uživateli zvyšovat nebo snižovat množství konkrétního produktu. Pokud je množství produktu větší než nula, uživatel může snížit množství produktu. Uživatel může kdykoli zvýšit množství produktu.

Funkce `handleAmountChange` je tedy předána do komponenty `Cart` jako vlastnost a `Cart` ji dále předává do komponenty `CartItem`. V `CartItem` je tato funkce předána do komponenty `Amount`, která ji volá, když uživatel změní množství produktu.
