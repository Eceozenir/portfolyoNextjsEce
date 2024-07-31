export default function Iletisim() {
    return (
        <div className="contactContainer">
            <div className="contactInfo">
                <h2>İletişim Bilgileri</h2>
                <ul>
                    <li><strong>Email:</strong> ece@ozenir.org</li>
                    <li><strong>Adres:</strong> Nişantaşı Üniversitesi Maslak 1453 Kampüsü</li>
                </ul>
            </div>
            <div className="mapContainer">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.85587041508515!2d29.00882108858867!3d41.119375161123166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab728fc42dd33%3A0x17d213078fb809f4!2zxLBzdGFuYnVsIE5pxZ9hbnRhxZ_EsSDDnG5pdmVyc2l0ZXNp!5e0!3m2!1str!2str!4v1714568411723!5m2!1str!2str"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}