export async function GET({ params, request }) {
    const data = {
        "Atlántico": {
            "Barranquilla": [
                { "Carnaval de Barranquilla": "Un evento imperdible con desfiles, danzas y música tradicional." },
                { "Museo del Caribe": "Conocer la historia y cultura del Caribe colombiano." },
                { "Malecón del Río Magdalena": "Disfrutar de caminatas y vistas del río." }
            ],
            "Puerto Colombia": [
                { "Playas": "Visitar Sabanilla, Pradomar y Puerto Velero para relajarse o practicar deportes acuáticos." }
            ]
        },
        "Bolívar": {
            "Cartagena de Indias": [
                { "Centro Histórico": "Explorar la Ciudad Amurallada, Patrimonio de la Humanidad por la UNESCO." },
                { "Castillo de San Felipe de Barajas": "Visitar esta fortaleza histórica." },
                { "Islas del Rosario": "Practicar snorkel y buceo en sus aguas cristalinas." }
            ],
            "Mompox": [
                { "Centro Histórico": "Recorrer este pueblo colonial también declarado Patrimonio de la Humanidad." },
                { "Festival de Jazz": "Disfrutar de este evento cultural que se celebra anualmente." }
            ]
        },
        "Magdalena": {
            "Santa Marta": [
                { "Parque Nacional Natural Tayrona": "Hacer senderismo, disfrutar de playas como Cabo San Juan y Bahía Concha." },
                { "Ciudad Perdida": "Realizar una caminata de varios días para descubrir este sitio arqueológico precolombino." },
                { "Quinta de San Pedro Alejandrino": "Visitar la hacienda donde murió Simón Bolívar." }
            ],
            "Ciénaga": [
                { "Ciénaga Grande de Santa Marta": "Navegar por este complejo de ciénagas y avistar fauna local." }
            ]
        },
        "Sucre": {
            "Sincelejo": [
                { "Festival de la Cosecha": "Participar en esta festividad agrícola y cultural." },
                { "Fiestas de Corralejas": "Asistir a estas fiestas taurinas tradicionales." }
            ],
            "Tolú y Coveñas": [
                { "Playas": "Disfrutar de las playas y practicar deportes náuticos." },
                { "Islas de San Bernardo": "Visitar este archipiélago y disfrutar de sus aguas turquesas." }
            ]
        },
        "Córdoba": {
            "Montería": [
                { "Ronda del Sinú": "Pasear por este parque lineal a orillas del río Sinú." },
                { "Festival Nacional del Porro": "Disfrutar de este evento musical y cultural." }
            ],
            "San Antero": [
                { "Volcán de Lodo El Totumo": "Bañarse en este curioso volcán de lodo, famoso por sus propiedades terapéuticas." }
            ]
        },
        "La Guajira": {
            "Riohacha": [
                { "Rancherías Wayúu": "Visitar las comunidades indígenas y aprender sobre su cultura." },
                { "Santuario de Fauna y Flora Los Flamencos": "Avistar flamencos rosados y otras aves." }
            ],
            "Cabo de la Vela y Punta Gallinas": [
                { "Playas": "Disfrutar de playas y paisajes desérticos únicos." },
                { "Deportes de Aventura": "Practicar kitesurf y windsurf en Cabo de la Vela." }
            ]
        }
    };

    return new Response(
      JSON.stringify(data)
    )
}