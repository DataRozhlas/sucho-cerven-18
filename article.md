title: "Písečná na Českokrumlovsku nebo Ivanovice na Hané. Podívejte se na mapu míst, kde nejvíc bojují se suchem"
perex: "Vyschlá půda se podepisuje zejména na stavu rostlin, voda nechybí jen zemědělcům, ale i zahrádkářům. Kde je situace nejhorší, ukazuje interaktivní mapa."
published: "2. červenec 2018"
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='#'>ČTK</a>"
styles: ["https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.4.2/ol.css"]
# snadné načítání csv: d3csv v libraries, d3.csv("soubor.csv").then(function(data){} ) v kódu
libraries: [jquery, "https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.4.2/ol.js", "https://interaktivni.rozhlas.cz/data/data.js"] #jquery, d3, d3v5, d3csv, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---
<left>
	<p>
	Mapa ukazuje, jak dlouho letos v jednotlivých obcích trvalo výrazné a horší sucho, určené podle metodiky Ústavu výzkumu globální změny Akademie věd ČR. Zhoršení nebo zlepšení se počítá ve srovnání s hodnotami za minulá desetiletí, mapa tedy vlastně ukazuje, kde se nyní situace nejvíc zhoršila či zlepšila.
	</p>
	<p>
	Jelikož se ale stav vody v půdě mění v závislosti na počasí, pro nejaktuálnější informace je dobré sledovat portál <a target="_blank" href="http://www.intersucho.cz">Intersucho.cz</a>.
	</p>
</left>

Výrazné sucho je celou dobu od začátku roku v Přísečné na Českokrumlovsku. Plyne to z dat, které pro server iROZHLAS.cz zpracovali experti z projektu [Intersucho.cz](http://www.intersucho.cz). „Výnosnost je letos mnohem nižší, tak 60 % procent běžných výnosů,“ říká soukromý zemědělec Václav Perník, který v Přísečné pěstuje píci pro koně.

Jeho slova potvrzují i odborníci. Obec totiž leží v takzvaném srážkovém stínu Šumavy, srážky od jihozápadu obvykle spadnou už v Bavorsku nebo Rakousku. „Nestihnou se zformovat takové srážky, aby zvládly zalít okolí Kleti,“ vysvětluje meteoroložka Eva Plášilová z ČHMÚ. „Myslím ale, že jižní Čechy jsou na tom relativně dobře,“ dodává s tím, že v jiných krajích je situace ještě horší.

_Stav k poslednímu červnovému týdnu můžete prozkoumat v následující mapě_

<wide>
<div id="mapdiv">
	<div id="select"></div>
	<div id="tooltip">Najetím vyberte obec.</div>
	<div id="map" class="map"></div>
	<div id="legend">
		<div id="scale"></div>
		<span class="zisk">delší sucho</span>
		<span class="ztrata">kratší sucho</span>
	</div>
	 <form action="?" id='frm-geocode'>
	  <label for="inp-geocode">Najít adresu</label>
	  <div class="inputs">
	    <input type="text" id="inp-geocode" placeholder="Bruntál">
	    <input type="submit" value="Najít">
	  </div>
	</form>
</div>
</wide>

Naopak v Ústeckém kraji jsou na tom rostliny nadprůměrně. „Stromy jsou v lepší kondici, než v jiných oblastech, kde jsou koruny proschlé, méně prolistěné,“ říká Jiří Toms z Lesů České republiky o porostech v okolí Liboňova. Vody je zde podle něj nastřádáno dost. 

„V Ústeckém kraji problém sucha tady v podstatě neexistuje. Ani povrchové, ani podzemní vody, ani vegetace nemají žádný závažnější problém s deficitem vláhy,“ potvrzuje pak Martin Novák z ústeckého ČHMÚ.