# Prank Login 🔐

Təhlükəsizlik məlumatlandırması üçün sadə prank səhifəsi. İnsanlara tanımadıqları saytlara real istifadəçi adı və parol yazmamağın vacibliyini göstərir.

## Necə işləyir

1. İstifadəçi "Nuvo" adlı qeydiyyat səhifəsi görür.
2. İstifadəçi adı yazır və parol yaradır. Parol şərtləri:
   - ən azı 8 simvol
   - bir böyük hərf
   - bir kiçik hərf
   - bir xüsusi simvol
3. **Hesab yarat** düyməsinə basanda prank ekranı açılır və yazdığı istifadəçi adı ilə parol ekrana çıxır.
4. Ekranda qısa izahat və təhlükəsizlik məsləhətləri göstərilir.

## Məlumatlar haqqında

Bu layihədə **server, verilənlər bazası və şəbəkə sorğusu yoxdur**. Yazılan məlumatlar heç yerə göndərilmir və saxlanmır. Yalnız istifadəçinin öz brauzerində, öz ekranında göstərilir. Səhifə bağlananda hər şey silinir.

## Qovluq strukturu

```
prank-login/
├── index.html      # səhifənin strukturu
├── css/
│   └── style.css   # dizayn (işıqlı və qaranlıq rejim)
├── js/
│   └── script.js   # parol yoxlaması və prank məntiqi
└── README.md
```

## Lokal işə salmaq

Heç nə quraşdırmaq lazım deyil. `index.html` faylını brauzerdə açmaq kifayətdir.

İstəsən lokal server də işə sala bilərsən:

```bash
python3 -m http.server 8000
# sonra brauzerdə: http://localhost:8000
```

## GitHub Pages ilə yayımlamaq

1. Faylları repoya yüklə (`index.html` repo kökündə olmalıdır).
2. Repoda **Settings → Pages** bölməsinə keç.
3. **Source** olaraq `Deploy from a branch` seç.
4. Branch olaraq `main` və qovluq olaraq `/ (root)` seç, sonra **Save** düyməsinə bas.
5. Bir neçə dəqiqədən sonra link hazır olacaq: `https://istifadeci-adin.github.io/repo-adi/`

## Fərdiləşdirmək

| Nəyi dəyişmək istəyirsən | Harada |
|---|---|
| Brend adı ("Nuvo") | `index.html` (`<title>` və `.brand` hissəsi) |
| Mətnlər və məsləhətlər | `index.html` (`#reveal` bölməsi) |
| Parol şərtləri | `js/script.js` (`checks` obyekti) və `index.html` (`.rules` siyahısı) |
| Rənglər | `css/style.css` (yuxarıdakı `:root` dəyişənləri) |
| "Hesab yaradılır…" gözləmə müddəti | `js/script.js` (`1400` millisaniyə) |

## Qeydlər

- Səhifədə `noindex` teqi var, yəni axtarış sistemləri onu indekslənməyəcək. Real saytı təqlid edən qeydiyyat səhifələri bəzən avtomatik olaraq təhlükəli sayt kimi işarələnə bilir, bu teq riski azaldır.
- Uydurma brend istifadə olunub. Real şirkətlərin (Google, Facebook və s.) adını və ya loqosunu istifadə etmə.
- Prank-ı yalnız tanıdığın insanlarla və təhlükəsizlik məqsədilə istifadə et. Real hesab məlumatlarını toplamaq üçün istifadə etmək olmaz. Bu layihə də heç nə toplamır.
