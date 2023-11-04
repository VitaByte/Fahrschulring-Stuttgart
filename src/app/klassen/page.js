import React from "react";
export default function Klassen() {
  const items = [
    {
      vehicleClass: "AM",
      description:
        "Zweirädrige Kleinkrafträder (auch mit Beiwagen) mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 45 km/h und einer elektrischen Antriebsmaschine oder einem Verbrennungsmotor mit einem Hubraum von nicht mehr als 50 cm³ oder einer maximalen Nenndauerleistung bis zu 4 kW im Falle von Elektromotoren. Krafträder mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 45 km/h und einer elektrischen Antriebsmaschine oder einem Verbrennungsmotor mit einem Hubraum von nicht mehr als 50 cm³, die zusätzlich hinsichtlich der Gebrauchsfähigkeit die Merkmale von Fahrrädern aufweisen (Fahrräder mit Hilfsmotor). Dreirädrige Kleinkrafträder und vierrädrige Leichtkraftfahrzeuge jeweils mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 45 km/h und einem Hubraum von nicht mehr als 50 cm³ im Falle von Fremdzündungsmotoren, einer maximalen Nutzleistung von nicht mehr als 4 kW im Falle anderer Verbrennungsmotoren oder einer maximalen Nenndauerleistung von nicht mehr als 4 kW im Falle von Elektromotoren; bei vierrädrigen Leichtkraftfahrzeugen darf darüber hinaus die Leermasse nicht mehr als 350 kg betragen, ohne Masse der Batterien im Falle von Elektrofahrzeugen.",
      ageRequirement: "15 Jahre",
      includedClasses: "keine",
    },
    {
      vehicleClass: "A1",
      description:
        "Krafträder (auch mit Beiwagen) mit einem Hubraum von bis zu 125 cm³ und einer Motorleistung von nicht mehr als 11 kW, bei denen das Verhältnis der Leistung zum Gewicht 0,1 kW/kg nicht übersteigt und dreirädrige Kraftfahrzeuge mit symmetrisch angeordneten Rädern und einem Hubraum von mehr als 50 cm³ bei Verbrennungsmotoren oder einer bauartbedingten Höchstgeschwindigkeit von mehr als 45 km/h und mit einer Leistung von bis zu 15 kW.",
      ageRequirement: "16 Jahre",
      includedClasses: "AM",
    },
    {
      vehicleClass: "A2",
      description:
        "Krafträder (auch mit Beiwagen) mit einer Motorleistung von nicht mehr als 35 kW, bei denen das Verhältnis der Leistung zum Gewicht 0,2 kW/kg nicht übersteigt, die nicht von einem Kraftrad mit einer Leistung von über 70 kW Motorleistung abgeleitet sind Übergangsrecht: Fahrerlaubnisse der Klasse A beschränkt, die vor dem 19.01.2013 erteilt wurden, gelten nach zwei Jahren automatisch als Klasse A (unbeschränkt).",
      ageRequirement: "18 Jahre",
      includedClasses: "A1 und AM",
    },
    {
      vehicleClass: "A",
      description:
        "Krafträder (auch mit Beiwagen) mit einem Hubraum von mehr als 50 cm³ oder mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von mehr als 45 km/h und Mindestalter: 24 Jahre (für Direkteinstieg), 20 Jahre (bei mind. 2 Jahre Vorbesitz der Klasse A2) Dreirädrige Kraftfahrzeuge mit einer Leistung von mehr als 15 kW und dreirädrige Kraftfahrzeuge mit symmetrisch angeordneten Rädern und einem Hubraum von mehr als 50 cm³ bei Verbrennungsmotoren oder einer bauartbedingten Höchstgeschwindigkeit von mehr als 45 km/h und mit einer Leistung von mehr als 15 kW.",
      ageRequirement: "21 Jahre",
      includedClasses: "A2, A1 und AM",
    },
    {
      vehicleClass: "B/ BF17",
      description:
        "Kraftfahrzeuge - ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2 und A mit einer zulässigen Gesamtmasse von nicht mehr als 3 500 kg, die zur Beförderung von nicht mehr als acht Personen außer dem Fahrzeugführer ausgelegt und gebaut sind (auch mit Anhänger mit einer zulässigen Gesamtmasse von nicht mehr als 750 kg oder mit Anhänger über 750 kg zulässiger Gesamtmasse, sofern die zulässige Gesamtmasse der Kombination 3 500 kg nicht übersteigt und im Inland dreirädrige Kraftfahrzeuge, im Falle eines Kraftfahrzeuges mit einer Motorleistung von mehr als 15 kW jedoch nur, soweit der Inhaber der Fahrerlaubnis mindestens 21 Jahre alt ist.",
      ageRequirement:
        "18 Jahre (17 Jahre für Teilnehmer am 'Begleiteten Fahren mit 17')",
      includedClasses: "AM und L",
    },
    {
      vehicleClass: "B96",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse B und einem Anhänger bestehen, mit einer zulässigen Gesamtmasse des Anhängers von mehr als 750 kg und zulässiger Gesamtmasse der Fahrzeugkombination von mehr als 3.500 kg und nicht mehr als 4.250 kg.",
      ageRequirement:
        "18 Jahre (17 Jahre für Teilnehmer am 'Begleiteten Fahren mit 17')",
      includedClasses: "keine",
    },
    {
      vehicleClass: "BE",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse B und einem Anhänger oder Sattelanhänger bestehen, sofern die zulässige Gesamtmasse des Anhängers oder Sattelanhängers 3 500 kg nicht übersteigt.",
      ageRequirement:
        "18 Jahre (17 Jahre für Teilnehmer am 'Begleiteten Fahren mit 17')",
      includedClasses: "keine",
    },
    {
      vehicleClass: "C1",
      description:
        "Kraftfahrzeuge, ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2 , A, D1 und D mit einer zulässigen Gesamtmasse von mehr als 3 500 kg, aber nicht mehr als 7500 kg, und die zur Beförderung von nicht mehr als acht Personen außer dem Fahrzeugführer ausgelegt und gebaut sind (auch mit Anhänger mit einer zulässigen Gesamtmasse von nicht mehr als 750 kg).",
      ageRequirement: "18 Jahre, Vorbesitz Führerscheinklasse B notwendig.",
      includedClasses: "keine",
    },
    {
      vehicleClass: "C1E",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse C1 und einem Anhänger oder Sattelanhänger mit einer zulässigen Gesamtmasse von mehr als 750 kg bestehen, sofern die zulässige Masse der Fahrzeugkombination 12 000 kg nicht übersteigt.\n\n- Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse B und einem Anhänger oder Sattelanhänger mit einer zulässigen Masse von mehr als 3 500 kg bestehen, sofern die zulässige Masse der Fahrzeugkombination 12 000 kg nicht übersteigt.",
      ageRequirement: "18 Jahre, Vorbesitz Führerscheinklasse C1 notwendig",
      includedClasses:
        "BE sowie D1E, sofern der Inhaber zum Führen von Fahrzeugen der Klasse D1 berechtigt ist.",
    },
    {
      vehicleClass: "C",
      description:
        "Kraftfahrzeuge, ausgenommen Kraftfahrzeuge der Klassen AM, A1, A 2, A, D1 und D mit einer zulässigen Gesamtmasse von mehr als 3 500 kg, die zur Beförderung von nicht mehr als acht Personen außer dem Fahrzeugführer ausgelegt und gebaut sind (auch mit Anhänger mit einer zulässigen Gesamtmasse von nicht mehr als 750 kg).",
      ageRequirement: "21 Jahre, Vorbesitz Führerscheinklasse B notwendig.",
    },
    {
      vehicleClass: "CE",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse C und Anhängern oder einem Sattelanhänger mit einer zulässigen Gesamtmasse von mehr als 750 kg bestehen.",
      ageRequirement: "21 Jahre, Vorbesitz Führerscheinklasse C notwendig",
      includedClasses:
        "BE, C1E und T sowie D1E, sofern der Inhaber zum Führen von Fahrzeugen der Klasse D1 berechtigt ist und DE, sofern er zum Führen von Fahrzeugen der Klasse D berechtigt ist.",
    },
    {
      vehicleClass: "D1",
      description:
        "Kraftfahrzeuge, ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2, A, die zur Beförderung von nicht mehr als 16 Personen außer dem Fahrzeugführer ausgelegt und gebaut sind und deren Länge nicht mehr als 8 m beträgt (auch mit Anhänger mit einer zulässigen Gesamtmasse von nicht mehr als 750 kg).",
      ageRequirement: "21 Jahre, Vorbesitz Führerscheinklasse B notwendig",
      includedClasses: "keine",
    },
    {
      vehicleClass: "D1E",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse D1 und einem Anhänger mit einer zulässigen Gesamtmasse von mehr als 750 kg bestehen.",
      ageRequirement: " 21 Jahre, Vorbesitz Führerscheinklasse D1 notwendig.",
      includedClasses: "BE",
    },
    {
      vehicleClass: "D",
      description:
        "Kraftfahrzeuge, ausgenommen Kraftfahrzeuge der Klassen AM, A1, A2, A, die zur Beförderung von mehr als acht Personen außer dem Fahrzeugführer ausgelegt und gebaut sind (auch mit Anhänger mit einer zulässigen Gesamtmasse von nicht mehr als 750 kg).",
      ageRequirement: "24 Jahre, Vorbesitz Führerscheinklasse B notwendig.",
      includedClasses: "D1",
    },
    {
      vehicleClass: "DE",
      description:
        "Fahrzeugkombinationen, die aus einem Zugfahrzeug der Klasse D und einem Anhänger mit einer zulässigen Gesamtmasse von mehr als 750 kg bestehen.",
      ageRequirement: "24 Jahre, Vorbesitz Führerscheinklasse D notwendig.",
      includedClasses: "BE, D1E",
    },
    {
      vehicleClass: "T",
      description:
        "Zugmaschinen mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 60 km/h und selbstfahrende Arbeitsmaschinen mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 40 km/h, die jeweils nach ihrer Bauart zur Verwendung für land- oder forstwirtschaftliche Zwecke bestimmt sind und für solche Zwecke eingesetzt werden (jeweils auch mit Anhängern).",
      ageRequirement:
        "16 Jahre bei 40 km/h (bbH) und 18 Jahre bei 60 km/h (bbH)",
      includedClasses: "L, AM",
    },
    {
      vehicleClass: "L",
      description:
        "Zugmaschinen, die nach ihrer Bauart zur Verwendung für land- oder forstwirtschaftliche Zwecke bestimmt sind und für solche Zwecke eingesetzt werden, mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 40 km/h und Kombinationen aus diesen Fahrzeugen und Anhängern, wenn sie mit einer Geschwindigkeit von nicht mehr als 25 km/h geführt werden, sowie selbstfahrende Arbeitsmaschinen, selbstfahrende Futtermischwagen, Stapler und andere Flurförderzeuge jeweils mit einer durch die Bauart bestimmten Höchstgeschwindigkeit von nicht mehr als 25 km/h und Kombinationen aus diesen Fahrzeugen und Anhängern.",
      ageRequirement: "16 Jahre",
      includedClasses: "keine",
    },
  ];
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="px-4 sm:px-0">
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          Ausbildung in allen Klassen
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {items.map((item,key) => (
            <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-base font-medium leading-6 text-gray-900">
                {item.vehicleClass}
              </dt>
              <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {item.description}
              </dd>
              <dt className="text-base font-medium leading-6 text-gray-900"></dt>
              <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <b>Mindestalter:</b> {item.ageRequirement}
              </dd>
              <dt className="text-base font-medium leading-6 text-gray-900"></dt>
              {item.includedClasses && (
                <dd className="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <b>Eingeschlossene Klassen:</b> {item.includedClasses}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}