
# Dasar

Berikut penggunaan dasar dari API

## Base URL
Kamu bisa langsung mengakses API melalui URL dibawah dengan method **GET**
```shell
https://api.devinesia.com/buka-hadis
```

### Parameter
Semua parameter dibawah tidak wajib ditambahkan

Method | Parameter | Tipe | Keterangan
-------|-----------|------|-----------
GET | field | String | Hanya mengambil beberapa attribute data seperti: **id**, **title**, **arab_text** dan **translated**
GET | perawi | String | Hanya mengambil dari perawi tertentu seperti: **bukhori**, **muslim**
GET | id | Integer | Mengambil satu hadis berdasarkan id
GET | keyword | String | Mencari hadis berdasarkan kata kunci pada terjemahan atau judul
GET | page | Integer | Berpindah halaman atau mengambil data hadis selanjutnya


## Response
```json
{
    "total_data": 38102,
    "total_page": 2541,
    "results": [
        {
            "id": "1",
            "title": "Hadits Abu Daud Nomor 1",
            "arab_text": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ بْنِ قَعْنَبٍ الْقَعْنَبِيُّ حَدَّثَنَا عَبْدُ الْعَزِيزِ يَعْنِي ابْنَ مُحَمَّدٍ عَنْ مُحَمَّدٍ يَعْنِي ابْنَ عَمْرٍو عَنْ أَبِي سَلَمَةَ عَنْ الْمُغِيرَةِ بْنِ شُعْبَةَ\nأَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ إِذَا ذَهَبَ الْمَذْهَبَ أَبْعَدَ",
            "translated": "Telah menceritakan kepada kami [Abdullah bin Maslamah bin Qa'nab al Qa'nabi] telah menceritakan kepada kami [Abdul Aziz yakni bin Muhammad] dari [Muhammad yakni bin Amru] dari [Abu Salamah] dari [Al Mughirah bin Syu'bah] bahwasanya Nabi shallallahu 'alaihi wasallam apabila hendak pergi untuk buang hajat, maka beliau menjauh.",
            "perawi": "Abu Daud"
        },
        {
            "id": "2",
            "title": "Hadits Abu Daud Nomor 2",
            "arab_text": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ حَدَّثَنَا عِيسَى بْنُ يُونُسَ أَخْبَرَنَا إِسْمَعِيلُ بْنُ عَبْدِ الْمَلِكِ عَنْ أَبِي الزُّبَيْرِ عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ\nأَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كَانَ إِذَا أَرَادَ الْبَرَازَ انْطَلَقَ حَتَّى لَا يَرَاهُ أَحَدٌ",
            "translated": "Telah menceritakan kepada kami [Musaddad bin Musarhad] telah menceritakan kepada kami [Isa bin Yunus] telah mengabarkan kepada kami [Isma'il bin Abdul Malik] dari [Abu az Zubair] dari [Jabir bin Abdullah] bahwasanya Nabi shallallahu 'alaihi wasallam apabila hendak buang hajat, maka beliau pergi hingga tidak ada seorang pun yang melihatnya.",
            "perawi": "Abu Daud"
        },
        ...
    ]
}
```