# hrackorama-kosik`

## State lifting v praxi

Hlavní stav aplikace, který sleduje produkty v košíku, je udržován v nadřazené komponentě `App`. Tato komponenta také definuje funkci `handleAmountChange`, která aktualizuje stav, když se změní množství konkrétního produktu.

Tato funkce je pak předána do komponenty `Cart` jako vlastnost a `Cart` ji dále předává do komponenty `CartItem`. V `CartItem` je tato funkce předána do komponenty `Amount`, která ji volá, když uživatel změní množství produktu.
