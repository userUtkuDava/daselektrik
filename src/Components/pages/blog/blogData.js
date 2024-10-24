import resim1 from "../images/blog/enerji-tasarrufu.jpg";

const createBlogEntry = (id, url, baslik, text, katagori, tarih, yazar) => {
  const first100Chars = text.substring(0, 300);
  return {
    id,
    url,
    first100Chars,
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
    "Evde enerji tasarrufu sağlamak hem bütçenize hem de çevreye katkıda bulunur. Bu yazıda, enerji tasarrufu sağlayacak basit ama etkili yöntemleri paylaşacağız. Enerji verimli aydınlatma sistemleri, akıllı prizler, termostat kullanımı ve cihazların bakımına dair öneriler sunacağız.",
    "elektrik",
    "02 / 04 / 2025",
    "eren aydın"
  ),
  createBlogEntry(
    "2",
    resim1,
    "Evde Elektrik Arızalarını Nasıl Tespit Edersiniz",
    "Elektrik arızaları sık karşılaşılan bir durum olabilir ve bazen ciddi sorunlara yol açabilir. Bu yazıda, evde basit elektrik arızalarını nasıl tespit edebileceğinizi, bazı yaygın sorunların çözümlerini ve hangi durumlarda profesyonel yardım almanız gerektiğini anlatacağız.",
    "elektrik",
    "02 / 04 / 2025",
    "utku"
  ),
  createBlogEntry(
    "3",
    resim1,
    "LED Aydınlatma: Geleneksel Ampullere Göre Avantajları",
    "LED aydınlatma, enerji verimliliği ve uzun ömrü ile dikkat çekiyor. Bu yazıda, LED ampullerin geleneksel ampullere kıyasla avantajlarını, enerji tasarrufu sağlayan özelliklerini ve kullanım alanlarını inceleyeceğiz.",
    "elektrik",
    "02 / 04 / 2025",
    "user"
  ),
  createBlogEntry(
    "4",
    resim1,
    "Elektrik Tesisatı Yenileme: Ne Zaman ve Neden Gereklidir?",
    "Eski elektrik tesisatları zamanla sorunlar çıkarabilir. Bu yazıda, elektrik tesisatının ne zaman yenilenmesi gerektiğini, yenilemenin avantajlarını ve sürecin nasıl işlediğini anlatacağız.",
    "elektrik kabloları",
    "02 / 04 / 2025",
    "user"
  ),
  createBlogEntry(
    "5",
    resim1,
    "fotoraf",
    "Evde enerji tasarrufu sağlamak hem bütçenize hem de çevreye katkıda bulunur. Bu yazıda, enerji tasarrufu sağlayacak basit ama etkili yöntemleri paylaşacağız. Enerji verimli aydınlatma sistemleri, akıllı prizler, termostat kullanımı ve cihazların bakımına dair öneriler sunacağız.",
    "elektrik",
    "02 / 04 / 2025",
    "eren aydın"
  ),
];
