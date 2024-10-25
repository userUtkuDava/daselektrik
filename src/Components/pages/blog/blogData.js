import resim1 from "../images/blog/enerji-tasarrufu.jpg";
import resim2 from "../images/blog/elektrik-arıza.jpg";
import resim3 from "../images/blog/led-aydınlatma.jpg";
import resim4 from "../images/blog/tesisat-yenileme.jpg";
import resim5 from "../images/blog/akıllıev.jpg";

const createBlogEntry = (id, url, baslik, text, tarih, katagori, yazar) => {
  const first100Chars = text.substring(0, 200);
  return {
    id,
    url,
    katagori,
    baslik,
    text,
    tarih,
    description: first100Chars,
    yazar,
  };
};

export const bloglar = [
  createBlogEntry(
    "1",
    resim1,
    "Evde Enerji Tasarrufu İçin 10 İpucu",
    "Evde enerji tasarrufu sağlamak hem bütçenize hem de çevreye katkıda bulunur. Biz bir elektrik firması olarak bu yazıda enerji tasarrufu sağlayacak basit ama etkili yöntemleri paylaşmak istiyoruz. Enerji verimli aydınlatma sistemleri akıllı prizler ve termostat kullanımı ile birlikte cihazların düzenli bakımına dair öneriler sunacağız. Ayrıca doğal ışık kullanımını artırmak, odaları gün boyunca mümkün olduğunca aydınlatmak için pencereleri açmak önemlidir. Hava sirkülasyonunu iyileştirmek için yazın fanları kullanmak kışın ise kaloriferleri düzenli olarak temizlemek faydalıdır. Elektrikli cihazları kullanmadığınızda fişten çekmek ve enerji tüketimini izleyen cihazlar kullanmak da tasarruf etmenize yardımcı olur. Bunun yanı sıra enerji verimliliği yüksek cihazlar tercih etmek uzun vadede büyük tasarruf sağlar. Su tasarrufu için düşük akışlı musluklar ve duş başlıkları kullanmak da enerji tasarrufuna katkıda bulunur. Tüm bu yöntemlerle hem enerji faturalarınızı düşürebilir hem de çevresel etkilerinizi azaltabilirsiniz.",
    "02 / 04 / 2025",
    "Tasarruf",
    "eren aydın"
  ),
  createBlogEntry(
    "2",
    resim2,
    "Evde Elektrik Arızalarını Nasıl Tespit Edersiniz",
    "Evde elektrik arızalarını tespit etmek hem güvenliğiniz hem de enerji tasarrufu açısından son derece önemlidir. İlk adım olarak elektrik kesintilerini ve anormal durumları dikkatlice gözlemlemek gereklidir. Eğer belirli bir odada veya tüm evde elektrik kesintisi yaşıyorsanız ana sigorta panelini kontrol etmek iyi bir başlangıçtır. Sigorta atmış olabilir veya devre kesici açılmış olabilir. Bir diğer yaygın sorun prizlerdeki aşırı ısınmadır. Eğer prizler ısınıyorsa ya da yanık bir koku geliyorsa bu durum bir arıza olduğunu gösterir. Cihazların fişlerini kontrol ederek hangi cihazın soruna neden olduğunu tespit edebilirsiniz. Kısa devre veya kaçak akım durumlarında evdeki ışıkların yanıp sönmesi veya tuhaf sesler duyulması gibi belirtiler gözlemlenebilir. Bu tür durumlarda elektrik sisteminizi hemen kontrol ettirmeniz önemlidir. Ayrıca düzenli olarak elektrikli cihazların kablolarını kontrol etmek aşınma veya hasar olup olmadığını görmek için faydalıdır. Eğer bu adımlar sonucunda sorunu tespit edemezseniz profesyonel bir elektrikçi çağırmak en iyi çözümdür. Uzmanlar arızayı güvenli bir şekilde tespit edip onarabilirler. Unutmayın elektrikle ilgili sorunlar ciddi sonuçlar doğurabilir bu nedenle tedbirli olmak her zaman en iyisidir.",
    "02 / 04 / 2025",
    "Arıza Tespit",
    "eren aydın"
  ),
  createBlogEntry(
    "3",
    resim3,
    "LED Aydınlatma: Geleneksel Ampullere Göre Avantajları",
    "LED aydınlatma, enerji verimliliği ve uzun ömürleri ile dikkat çeken modern bir aydınlatma çözümüdür. Geleneksel ampullere göre birçok avantaj sunar. Öncelikle, LED ampuller geleneksel ampullere göre çok daha az enerji tüketirler. Bu da elektrik faturalarınızı düşürmenize yardımcı olur. \n\nLED aydınlatma, daha uzun ömürlüdür. Bir LED ampul, ortalama 25000 saat ile 50000 saat arasında bir kullanım ömrüne sahiptir. Bu da geleneksel ampullerin ömründen 25 kat daha fazladır. Daha az sıklıkta ampul değiştirmeniz gerektiğinden, zaman ve maliyet tasarrufu sağlar. \n\nAyrıca LED'ler daha az ısı üretir. Bu, hem güvenlik hem de enerji tasarrufu açısından önemlidir. Geleneksel ampuller, enerji tüketimlerinin büyük bir kısmını ısı olarak kaybederken, LED'ler bu kaybı en aza indirir. Bu sayede, özellikle kapalı alanlarda daha serin bir ortam sağlarlar. \n\nLED aydınlatma sistemleri çeşitli renk sıcaklıklarında mevcuttur, böylece ortamın ambiyansını istediğiniz gibi ayarlayabilirsiniz. Ayrıca, akıllı ev sistemleri ile entegre edilebilen LED aydınlatmalar, uzaktan kontrol imkanı sunar ve enerji verimliliğinizi artırır. \n\nSonuç olarak, LED aydınlatma, enerji tasarrufu, uzun ömür ve düşük ısı üretimi gibi birçok avantaj sunarak, geleneksel ampullere kıyasla daha iyi bir seçimdir. Hem bütçenizi hem de çevrenizi korumak için LED aydınlatmayı tercih etmek akıllıca bir tercihtir.",
    "02 / 04 / 2025",
    "elektrik",
    "eren aydın"
  ),
  createBlogEntry(
    "4",
    resim4,
    "Elektrik Tesisatı Yenileme: Ne Zaman ve Neden Gereklidir?",
    "Eski elektrik tesisatları zamanla sorunlar çıkarabilir Bu yazıda elektrik tesisatının ne zaman yenilenmesi gerektiğini yenilemenin avantajlarını ve sürecin nasıl işlediğini anlatacağız Elektrik tesisatının yenilenmesi gereken durumlar şunlardır Tesisatın yaşı genellikle 20-30 yıl arasında olduğunda yenilenmesi önerilir Sık sık elektrik kesintileri yaşıyorsanız bu durum tesisatın yetersiz olduğunu veya arızalı olduğunu gösteriyor olabilir Kısa devre aşırı ısınma ya da duman gibi sorunlar tesisatın güvenli olmadığını işaret eder Ayrıca evdeki priz sayısı artan cihaz sayısıyla orantılı olarak yetersiz kalıyorsa tesisatın yenilenmesi gereklidir Yenilemenin avantajları arasında güvenlik enerji verimliliği gelişmiş teknoloji ve artan değer bulunmaktadır Yeni tesisatlar modern güvenlik standartlarına uygun olduğu için yangın ve elektrik çarpması riskini azaltır Yenilenen tesisatlar enerji tüketimini azaltarak faturalarınızı düşürür Modern sistemler akıllı ev uygulamalarıyla uyumlu hale getirilebilir ve evinizin elektrik tesisatını yenilemek gayrimenkul değerini artırır Yenileme süreci şu aşamalardan oluşur Öncelikle uzman bir elektrikçi mevcut tesisatın durumunu değerlendirir Ardından yenileme süreci için bir plan hazırlanır Belirlenen plana göre yenileme işlemi başlar Tesisatın güvenli ve verimli çalıştığından emin olmak için testler yapılır Son olarak işlemler tamamlandıktan sonra elektrikçi tarafından son bir kontrol yapılır Sonuç olarak eski elektrik tesisatlarının yenilenmesi hem güvenlik hem de enerji verimliliği açısından kritik öneme sahiptir",
    "02 / 04 / 2025",
    "Elektrik Arıza",
    "user"
  ),
  createBlogEntry(
    "5",
    resim5,
    "Akıllı Ev Sistemleri: Enerji Verimliliğinizi Artırmanın Yolu",
    "Akıllı ev sistemleri, yaşam alanlarınızı daha konforlu ve enerji verimli hale getirmek için tasarlanmıştır. Bu sistemler, çeşitli cihazların otomatik olarak yönetilmesini sağlar ve kullanıcılara uzaktan kontrol imkanı sunar. Akıllı aydınlatma, akıllı termostatlar ve enerji izleme sistemleri gibi çözümler, hem enerji tasarrufu sağlar hem de yaşam kalitenizi artırır.\n\nAkıllı aydınlatma sistemleri, ışıkların ihtiyaç duyulduğunda açılıp kapanmasını sağlar. Böylece, kullanılmadığı zamanlarda enerjinin israfını önler. Ayrıca, zamanlayıcılar ve sensörler sayesinde, evde olup olmadığınızı algılayarak otomatik olarak ışıkları ayarlayabilirler.\n\nAkıllı termostatlar, ısıtma ve soğutma sistemlerini daha verimli bir şekilde yönetir. Kullanıcılar, evin sıcaklığını istedikleri gibi ayarlayabilir ve enerji tüketimini izleyerek tasarruf edebilirler. Bu cihazlar, dış hava koşullarını da göz önünde bulundurarak enerji verimliliğini artırır.\n\nEnerji izleme sistemleri, evinizdeki enerji tüketimini gerçek zamanlı olarak takip etmenizi sağlar. Hangi cihazların daha fazla enerji tükettiğini görebilir ve tasarruf yapmak için gerekli önlemleri alabilirsiniz. \n\nSonuç olarak, akıllı ev sistemleri, enerji verimliliğinizi artırmak ve günlük yaşamınızı kolaylaştırmak için mükemmel bir çözümdür. Bu teknolojileri kullanarak hem bütçenizi koruyabilir hem de çevreye olan etkinizi azaltabilirsiniz.",
    "02 / 04 / 2025",
    "Akıllı Teknolojiler",
    "eren aydın"
  ),
];
