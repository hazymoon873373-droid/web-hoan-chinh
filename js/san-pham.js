
// Cấu hình các chức năng trang Sản phẩm
    
    var products = [
      { id:1, name:'Lọc thùng AquaPro X1200', cat:'he-thong-loc', catLabel:'Hệ thống lọc', desc:'Hệ thống lọc cao cấp 5 ngăn chuyên dụng cho hồ cá Koi và hồ cá cảnh. Hiệu suất vượt trội – Vận hành êm ái – Tiết kiệm điện – Bền bỉ tối ưu.', price:'2.890.000đ', priceRaw:2890000, priceOld:'3.290.000đ', discount:'-12%', rating:4.9, reviews:128, sold:'Đã bán 1.256+', image:'assets/images/products/thiet-bi/loc-thung-sunsun-xiaoli-xwa-600.webp', badge:'ban-chay', badgeText:'Bán chạy', meta:'65×42×55cm, 120L', popular:true,
        features:[{icon:'bi-funnel-fill',main:'Lọc sạch vượt trội',sub:'Nước trong & ổn định'},{icon:'bi-lightning-charge',main:'Tiết kiệm điện',sub:'Công nghệ DC tiết kiệm 40%'},{icon:'bi-volume-mute',main:'Vận hành êm ái',sub:'Độ ồn thấp < 45dB'},{icon:'bi-shield-check',main:'Bảo hành 24 tháng',sub:'Hỗ trợ kỹ thuật 24/7'}],
        specs:[['Model','AquaPro X1200'],['Kích thước','65 x 42 x 55 cm'],['Công suất bơm','28W'],['Lưu lượng tối đa','12.000 L/h'],['Số lượng ngăn','5 ngăn'],['Dung tích lọc','120 lít'],['Vật liệu','Nhựa ABS cao cấp'],['Phù hợp hồ','5 – 30m³'],['Bảo hành','24 tháng']],
        adv:['Lọc sạch tối ưu — hệ thống 5 ngăn lọc chuyên sâu, loại bỏ cặn bẩn, amoniac và độc tố hiệu quả.','Vật liệu cao cấp — sử dụng nhựa ABS nguyên sinh, chống UV, bền bỉ với thời gian.','Dễ dàng bảo trì — thiết kế thông minh giúp tháo lắp nhanh chóng, vệ sinh đơn giản.','Phù hợp nhiều loại hồ — lý tưởng cho hồ Koi, hồ cá cảnh, hồ thủy sinh với thể tích từ 5 – 30m³.'],
        ngan:[{num:'1',name:'Ngăn lọc thô',desc:'Loại bỏ lá cây, cặn bẩn lớn'},{num:'2',name:'Ngăn lọc cơ học',desc:'Bông lọc, jmat lọc bụi mịn'},{num:'3',name:'Ngăn lọc sinh học',desc:'Bioball, Matrix, Sứ lọc vi sinh'},{num:'4',name:'Ngăn lọc hóa học',desc:'Than hoạt tính, Zeolite'},{num:'5',name:'Ngăn bơm',desc:'Bơm đẩy nước sạch về hồ'}],
        hoTypes:[{icon:'bi-fish',name:'Hồ cá Koi',size:'5 – 30m³'},{icon:'bi-water',name:'Hồ cá cảnh',size:'5 – 30m³'},{icon:'bi-tree',name:'Hồ thủy sinh',size:'5 – 20m³'},{icon:'bi-sun',name:'Hồ ngoài trời',size:'10 – 30m³'}],
        reviews:[{name:'Minh Tuấn',loc:'Thủ Đức, TP.HCM',stars:5,text:'Hệ thống lọc AquaPro X1200 vận hành êm, nước trong và cá khỏe màu sắc đẹp hơn rất nhiều. Rất đáng tiền!'},{name:'Thanh Hương',loc:'Quận 7, TP.HCM',stars:5,text:'Đội ngũ tư vấn chuyên nghiệp, hướng dẫn lắp đặt chi tiết. Tôi hoàn toàn yên tâm khi chọn Aqua Care.'},{name:'Quốc Bảo',loc:'Bình Dương',stars:5,text:'Sản phẩm chất lượng, bảo hành uy tín. Sẽ tiếp tục ủng hộ tất cả các sản phẩm khác của Aqua Care.'}]
      },
      { id:2, name:'Thức Ăn Koi Growth 1.5kg', cat:'thuc-an', catLabel:'Thức ăn', desc:'Cám Koi Growth chuyên dụng giúp cá tăng trưởng nhanh, lên màu đẹp tự nhiên.', price:'320.000đ', priceRaw:320000, rating:4.5, reviews:215, sold:'Đã bán 892+', image:'assets/images/products/thuc-an/cam-ca-koi-kibakoi.jpeg', badge:'ban-chay', badgeText:'Bán chạy', meta:'1.5kg', popular:true,
        features:[{icon:'bi-star-fill',main:'Tăng trưởng nhanh',sub:'Protein cao 38%'},{icon:'bi-palette2',main:'Lên màu đẹp',sub:'Spirulina, Astaxanthin'},{icon:'bi-heart',main:'Hỗ trợ tiêu hóa',sub:'Men vi sinh bổ sung'},{icon:'bi-shield-check',main:'An toàn',sub:'Không chất bảo quản'}],
        specs:[['Loại cám','Nổi mặt nước'],['Kích cỡ hạt','4mm'],['Protein thô','38% min'],['Chất béo thô','6% min'],['Độ ẩm tối đa','12%'],['Bảo quản','Nơi khô ráo, thoáng mát'],['Hạn sử dụng','24 tháng']],
        adv:['Protein cao 38% giúp cá tăng trưởng nhanh và khỏe mạnh.','Thành phần Spirulina và Astaxanthin hỗ trợ lên màu rực rỡ tự nhiên.','Men vi sinh bổ sung hỗ trợ tiêu hóa, giảm chất thải, bảo vệ nước hồ.','Không chất bảo quản, an toàn cho cá và môi trường.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:3, name:'Vi Sinh Aqua Bacteria 1000ml', cat:'thuoc-vi-sinh', catLabel:'Vi sinh', desc:'Vi sinh xử lý nước hồ cá, cân bằng hệ sinh thái, loại bỏ amoniac và nitrite hiệu quả.', price:'280.000đ', priceRaw:280000, rating:4.5, reviews:87, sold:'Đã bán 456+', image:'assets/images/products/thuoc-vi-sinh/vi-sinh-koika-em-perfect.jpeg', badge:'moi', badgeText:'Mới', meta:'1000ml',
        features:[{icon:'bi-droplet-fill',main:'Xử lý nước nhanh',sub:'Hiệu quả trong 24-48h'},{icon:'bi-bacteria',main:'Cân bằng vi sinh',sub:'Tăng vi khuẩn có lợi'},{icon:'bi-fish',main:'An toàn cho cá',sub:'Thân thiện sinh vật'},{icon:'bi-clock',main:'Hiệu quả lâu dài',sub:'Duy trì 2-4 tuần/lần'}],
        specs:[['Thể tích','1000ml'],['Dạng','Dung dịch lỏng'],['Vi khuẩn','Bacillus, Nitrosomonas'],['Liều dùng','10ml/100L hồ'],['Tần suất','2 tuần/lần'],['Bảo quản','Tránh ánh nắng trực tiếp'],['Hạn sử dụng','18 tháng']],
        adv:['Chứa vi khuẩn Bacillus và Nitrosomonas giúp phân hủy chất thải hữu cơ hiệu quả.','Loại bỏ amoniac và nitrite – những độc tố phổ biến nguy hại cho cá.','An toàn tuyệt đối cho cá, cây thủy sinh và sinh vật trong hồ.','Ổn định pH nước, tạo môi trường sống lý tưởng cho cá.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:4, name:'Vật Liệu Lọc Ceramic Ring 1L', cat:'vat-lieu-loc', catLabel:'Vật liệu lọc', desc:'Bi gốm ceramic chất lượng cao, tạo điều kiện tốt nhất cho vi sinh vật có lợi phát triển.', price:'89.000đ', priceRaw:89000, priceOld:'105.000đ', discount:'-15%', rating:4.5, reviews:73, sold:'Đã bán 234+', image:'assets/images/products/vat-lieu-loc/bi-den-dai-loan.jpg', badge:'sale', badgeText:'-15%', meta:'Túi 1L',
        features:[{icon:'bi-layers',main:'Diện tích lớn',sub:'Nhiều lỗ nhỏ li ti'},{icon:'bi-bacteria',main:'Vi sinh dồi dào',sub:'Môi trường lý tưởng'},{icon:'bi-recycle',main:'Bền bỉ',sub:'Sử dụng được nhiều năm'},{icon:'bi-currency-dollar',main:'Tiết kiệm',sub:'Chi phí thấp, hiệu quả cao'}],
        specs:[['Thể tích','1L (~300 viên)'],['Chất liệu','Gốm ceramic cao cấp'],['Kích thước viên','16×12mm'],['Diện tích bề mặt','>250m²/L'],['Độ xốp','>55%'],['Tuổi thọ','3-5 năm'],['Phù hợp','Mọi loại hồ']],
        adv:['Bề mặt xốp cao với hàng triệu lỗ nhỏ tạo nơi trú ngụ lý tưởng cho vi sinh vật có lợi.','Diện tích bề mặt lớn >250m²/L giúp tối ưu hóa khả năng lọc sinh học.','Chất liệu gốm cao cấp, trơ hóa học, không ảnh hưởng đến pH nước.','Bền bỉ, có thể tái sử dụng 3-5 năm với việc vệ sinh đúng cách.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:5, name:'Cám cá Koi Sakura 1kg', cat:'thuc-an', catLabel:'Thức ăn', desc:'Cám Sakura cho cá Koi, hỗ trợ màu sắc rực rỡ và tăng trưởng ổn định.', price:'195.000đ', priceRaw:195000, rating:4.9, reviews:164, sold:'Đã bán 678+', image:'assets/images/products/thuc-an/cam-ca-koi-sakura.jpg', badge:'ban-chay', badgeText:'Bán chạy', meta:'1kg', popular:true,
        features:[{icon:'bi-palette2',main:'Tăng màu vượt trội',sub:'Carotenoid tự nhiên'},{icon:'bi-graph-up',main:'Tăng trưởng đều',sub:'Cân bằng dinh dưỡng'},{icon:'bi-heart',main:'Khỏe mạnh',sub:'Hệ miễn dịch tốt'},{icon:'bi-star-fill',main:'Chất lượng cao',sub:'Nhập khẩu Nhật Bản'}],
        specs:[['Loại cám','Nổi, hạt chìm'],['Kích cỡ hạt','4-6mm'],['Protein thô','40% min'],['Thành phần đặc biệt','Carotenoid, Spirulina'],['Trọng lượng','1kg'],['Bảo quản','Nơi khô ráo'],['Hạn sử dụng','24 tháng']],
        adv:['Carotenoid và Spirulina thiên nhiên giúp màu sắc cá Koi rực rỡ, bền đẹp.','Protein cao 40%, cân bằng amino acid giúp cá tăng trưởng đều và khỏe mạnh.','Bổ sung vitamin và khoáng chất tăng cường hệ miễn dịch.','Công thức nhập khẩu Nhật Bản, kiểm soát chất lượng nghiêm ngặt.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:6, name:'Máy bơm Hsbao FP-1500', cat:'thiet-bi', catLabel:'Thiết bị', desc:'Máy bơm đẩy nước mạnh mẽ, tiết kiệm điện, phù hợp cho hồ cá Koi và hồ thủy sinh.', price:'450.000đ', priceRaw:450000, rating:4.6, reviews:52, sold:'Đã bán 189+', image:'assets/images/products/thiet-bi/may-bom-day-hsbao-fp.webp', badge:'', badgeText:'', meta:'Công suất 35W',
        features:[{icon:'bi-lightning-charge',main:'Tiết kiệm điện',sub:'Chỉ 35W'},{icon:'bi-water',main:'Lưu lượng lớn',sub:'8.000L/h'},{icon:'bi-volume-mute',main:'Siêu êm',sub:'Dưới 40dB'},{icon:'bi-droplet',main:'Chịu ẩm IP68',sub:'An toàn dưới nước'}],
        specs:[['Model','Hsbao FP-1500'],['Công suất','35W'],['Lưu lượng','8.000L/h'],['Cột áp tối đa','3.5m'],['Điện áp','220V - 50Hz'],['Kích thước','18×10×15cm'],['Bảo hành','12 tháng']],
        adv:['Công nghệ DC hiện đại, tiết kiệm điện năng đến 40% so với máy bơm thông thường.','Lưu lượng 8.000L/h mạnh mẽ, đảm bảo tuần hoàn nước hiệu quả.','Độ ồn thấp dưới 40dB, không làm ảnh hưởng đến môi trường sống của cá.','Chống nước IP68, an toàn tuyệt đối khi sử dụng trong hồ cá.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:7, name:'Đèn LED Aqua Plus Apollo 11 màu', cat:'thiet-bi', catLabel:'Thiết bị', desc:'Đèn LED thủy sinh cao cấp với 11 chế độ màu, điều khiển từ xa, chống nước IP68.', price:'680.000đ', priceRaw:680000, rating:4.7, reviews:39, sold:'Đã bán 156+', image:'assets/images/products/thiet-bi/den-led-aqua-plus-apollo-11-mau.webp', badge:'moi', badgeText:'Mới', meta:'Chống nước IP68',
        features:[{icon:'bi-lightbulb-fill',main:'11 chế độ màu',sub:'RGB đa dạng'},{icon:'bi-phone',main:'Điều khiển từ xa',sub:'App & remote'},{icon:'bi-droplet-fill',main:'Chống nước IP68',sub:'An toàn tuyệt đối'},{icon:'bi-tree',main:'Kích thích quang hợp',sub:'Thủy sinh phát triển'}],
        specs:[['Model','Aqua Plus Apollo 11'],['Công suất','24W'],['Số chế độ màu','11 chế độ'],['Chống nước','IP68'],['Điều khiển','Remote + App'],['Nhiệt độ màu','6500K - 12000K'],['Bảo hành','12 tháng']],
        adv:['11 chế độ màu RGB giúp tùy chỉnh ánh sáng theo sở thích và loại cá.','Điều khiển từ xa bằng remote và ứng dụng điện thoại tiện lợi.','Chống nước tuyệt đối IP68, an toàn sử dụng trong môi trường ẩm ướt.','Phổ ánh sáng tối ưu kích thích quang hợp, giúp cây thủy sinh phát triển xanh tươi.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:8, name:'Hạt lọc Kaldnes K3 500g', cat:'vat-lieu-loc', catLabel:'Vật liệu lọc', desc:'Moving bed filter media Kaldnes K3 – vật liệu lọc sinh học hiệu quả nhất cho hệ lọc thác.', price:'55.000đ', priceRaw:55000, rating:4.9, reviews:98, sold:'Đã bán 567+', image:'assets/images/products/vat-lieu-loc/hat-loc-kaldnes.webp', badge:'ban-chay', badgeText:'Bán chạy', meta:'Túi 500g', popular:true,
        features:[{icon:'bi-recycle',main:'Moving bed',sub:'Tự làm sạch 24/7'},{icon:'bi-bacteria',main:'Diện tích lớn',sub:'800m²/m³'},{icon:'bi-graph-up-arrow',main:'Hiệu quả cao',sub:'Lọc vi sinh tốt nhất'},{icon:'bi-currency-dollar',main:'Kinh tế',sub:'Giá thành thấp'}],
        specs:[['Chất liệu','HDPE (Nhựa PE cao tỷ trọng)'],['Kích thước','25mm'],['Diện tích bề mặt','800m²/m³'],['Tỷ trọng','0.95 g/cm³'],['Màu sắc','Đen'],['Trọng lượng gói','500g (~350 viên)'],['Xuất xứ','Na Uy']],
        adv:['Moving bed technology giúp vật liệu lọc tự làm sạch liên tục, không bị bít.','Diện tích bề mặt 800m²/m³ – lớn nhất trong các loại vật liệu lọc sinh học.','Thiết kế tối ưu với bánh răng bên trong và ngoài tăng khả năng tiếp xúc nước.','Không cần rửa định kỳ, giảm thiểu công sức bảo trì hệ thống lọc.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:9, name:'Cây Dương Xỉ Java', cat:'cay-thuy-sinh', catLabel:'Cây thủy sinh', desc:'Cây thủy sinh dễ trồng, không cần CO2, phù hợp cả người mới bắt đầu.', price:'35.000đ', priceRaw:35000, rating:4.8, reviews:143, sold:'Đã bán 891+', image:'assets/images/products/cay-thuy-sinh/duong-xi-java.webp', badge:'', badgeText:'', meta:'Bụi nhỏ',
        features:[{icon:'bi-tree',main:'Dễ trồng',sub:'Không cần CO2'},{icon:'bi-sun',main:'Ánh sáng yếu',sub:'Thích bóng mát'},{icon:'bi-filter',main:'Lọc nước tự nhiên',sub:'Hấp thụ nitrate'},{icon:'bi-heart',main:'Phù hợp cá',sub:'Bóng dâm cho cá'}],
        specs:[['Tên khoa học','Microsorum pteropus'],['Loại','Cây thủy sinh nước ngọt'],['Ánh sáng','Thấp đến trung bình'],['CO2','Không cần'],['Nhiệt độ','18-30°C'],['pH','6.0-7.5'],['Kích thước','10-20cm']],
        adv:['Dễ trồng, phù hợp cho người mới bắt đầu chơi thủy sinh.','Không cần ánh sáng mạnh và CO2, tiết kiệm chi phí vận hành.','Hấp thụ nitrate tự nhiên, giúp cân bằng chất lượng nước hồ.','Cung cấp bóng dâm và nơi ẩn náu cho cá, đặc biệt cá nhỏ và tôm.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:10, name:'Thuốc trị nấm Anti Shep', cat:'thuoc-vi-sinh', catLabel:'Thuốc vi sinh', desc:'Điều trị nấm, ký sinh trùng và vi khuẩn gây bệnh trên cá cảnh hiệu quả và an toàn.', price:'85.000đ', priceRaw:85000, rating:4.7, reviews:67, sold:'Đã bán 312+', image:'assets/images/products/thuoc-vi-sinh/thuoc-tri-nam-anti-shep.jpg', badge:'', badgeText:'', meta:'100ml',
        features:[{icon:'bi-capsule',main:'Trị nấm hiệu quả',sub:'Trong 3-5 ngày'},{icon:'bi-shield-fill',main:'An toàn cá',sub:'Không gây stress'},{icon:'bi-droplet',main:'Dễ sử dụng',sub:'Thêm trực tiếp hồ'},{icon:'bi-heart-fill',main:'Phục hồi nhanh',sub:'Kết quả rõ rệt'}],
        specs:[['Thể tích','100ml'],['Công dụng','Trị nấm, vi khuẩn, ký sinh trùng'],['Liều dùng','5ml/100L nước'],['Tần suất','3 ngày/lần'],['Thời gian điều trị','5-7 ngày'],['An toàn','Cá, tôm, cây thủy sinh'],['Hạn sử dụng','24 tháng']],
        adv:['Hiệu quả với các bệnh nấm trắng, đốm trắng, thối vây ở cá cảnh.','An toàn cho cá, tôm và cây thủy sinh khi dùng đúng liều lượng.','Không cần tháo than hoạt tính khi dùng.','Kết quả thấy rõ sau 3-5 ngày điều trị.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:11, name:'Cám cá Koi bản cao cấp 1kg', cat:'thuc-an', catLabel:'Thức ăn', desc:'Dòng cám cao cấp cho cá Koi, hỗ trợ tăng màu tối đa và giữ dáng cá cân đối.', price:'220.000đ', priceRaw:220000, rating:4.9, reviews:88, sold:'Đã bán 445+', image:'assets/images/products/thuc-an/cam-ca-koi-ban-cao-cap.jpg', badge:'moi', badgeText:'Mới', meta:'1kg',
        features:[{icon:'bi-award-fill',main:'Cao cấp nhất',sub:'Dòng premium'},{icon:'bi-palette2',main:'Tăng màu tối đa',sub:'Astaxanthin đậm đặc'},{icon:'bi-fish',main:'Dáng cá đẹp',sub:'Cơ thể cân đối'},{icon:'bi-star-fill',main:'Nhập khẩu',sub:'Tiêu chuẩn Nhật Bản'}],
        specs:[['Loại','Premium Koi Food'],['Protein','42% min'],['Astaxanthin','200mg/kg'],['Kích cỡ hạt','6-8mm'],['Dạng','Nổi mặt nước'],['Trọng lượng','1kg'],['Xuất xứ','Nhật Bản']],
        adv:['Hàm lượng Astaxanthin 200mg/kg – cao nhất trong phân khúc, tăng màu mạnh mẽ.','Protein 42% từ cá biển nguyên chất, cá tăng trưởng nhanh và dáng đẹp.','Lecithin và DHA hỗ trợ hệ thần kinh, cá hoạt bát và linh hoạt hơn.','Hạt to 6-8mm phù hợp cá Koi trưởng thành, không làm đục nước.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:12, name:'Máy lọc chìm Jingye 15W', cat:'thiet-bi', catLabel:'Thiết bị', desc:'Lọc chìm mini cho bể cá nhỏ và vừa, hoạt động êm ái, lắp đặt đơn giản.', price:'185.000đ', priceRaw:185000, rating:4.6, reviews:44, sold:'Đã bán 234+', image:'assets/images/products/thiet-bi/may-loc-chim-jingye-15w.webp', badge:'', badgeText:'', meta:'15W',
        features:[{icon:'bi-volume-mute',main:'Siêu êm',sub:'< 30dB'},{icon:'bi-gear',main:'Dễ lắp đặt',sub:'Không cần công cụ'},{icon:'bi-lightning-charge',main:'Tiết kiệm',sub:'Chỉ 15W'},{icon:'bi-tools',main:'Dễ vệ sinh',sub:'Tháo rời hoàn toàn'}],
        specs:[['Model','Jingye JY-02'],['Công suất','15W'],['Lưu lượng','1.500L/h'],['Bể phù hợp','50-300L'],['Điện áp','220V'],['Kích thước','8×8×18cm'],['Bảo hành','12 tháng']],
        adv:['Thiết kế nhỏ gọn, dễ dàng lắp đặt trong bể cá không cần dụng cụ.','Độ ồn rất thấp dưới 30dB, không làm phiền môi trường xung quanh.','Kết hợp lọc cơ học và sinh học trong một thiết bị nhỏ gọn.','Tiêu thụ điện chỉ 15W, rất tiết kiệm cho bể cá gia đình.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:13, name:'Rong tóc tiên', cat:'cay-thuy-sinh', catLabel:'Cây thủy sinh', desc:'Cây thủy sinh mềm mại, tạo cảnh quan đẹp và cung cấp oxy cho hồ cá.', price:'25.000đ', priceRaw:25000, rating:4.7, reviews:89, sold:'Đã bán 1.234+', image:'assets/images/products/cay-thuy-sinh/rong-toc-tien.webp', badge:'ban-chay', badgeText:'Bán chạy', meta:'Bó nhỏ', popular:true,
        features:[{icon:'bi-wind',main:'Tạo oxy',sub:'Quang hợp hiệu quả'},{icon:'bi-tree',main:'Cảnh quan đẹp',sub:'Lắc lư theo dòng nước'},{icon:'bi-fish',name:'fish',main:'Cá thích',sub:'Nơi đẻ trứng lý tưởng'},{icon:'bi-droplet',main:'Dễ trồng',sub:'Cắm hoặc thả nổi'}],
        specs:[['Tên thông thường','Rong tóc tiên'],['Loại','Cây mềm nước ngọt'],['Ánh sáng','Thấp đến cao'],['CO2','Không cần'],['Nhiệt độ','18-28°C'],['pH','6.5-7.5'],['Đặc điểm','Thân mảnh, lá nhỏ li ti']],
        adv:['Quang hợp mạnh, tạo nhiều oxy cho hồ cá.','Cây mềm tạo cảnh quan tự nhiên đẹp mắt, lắc lư theo dòng nước rất sinh động.','Nơi đẻ trứng lý tưởng cho nhiều loài cá cảnh.','Không cần CO2 và ánh sáng đặc biệt, phù hợp mọi loại hồ.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:14, name:'Bi đỏ Đài Loan 500g', cat:'vat-lieu-loc', catLabel:'Vật liệu lọc', desc:'Bi lọc đỏ chuyên dụng cho ngăn lọc vi sinh, ổn định chất lượng nước.', price:'45.000đ', priceRaw:45000, rating:4.8, reviews:62, sold:'Đã bán 456+', image:'assets/images/products/vat-lieu-loc/bi-do-dai-loan.jpg', badge:'', badgeText:'', meta:'Túi 500g',
        features:[{icon:'bi-bacteria',main:'Vi sinh dồi dào',sub:'Bề mặt xốp cao'},{icon:'bi-layers',main:'Bền bỉ',sub:'Không tan trong nước'},{icon:'bi-recycle',main:'Tái sử dụng',sub:'Vệ sinh, dùng lại'},{icon:'bi-currency-dollar',main:'Kinh tế',sub:'Giá thành rất thấp'}],
        specs:[['Chất liệu','Đất sét nung cao cấp'],['Màu sắc','Đỏ/nâu đỏ'],['Kích thước','15-20mm'],['Diện tích bề mặt','>150m²/L'],['Trọng lượng','500g'],['Xuất xứ','Đài Loan'],['Tuổi thọ','2-3 năm']],
        adv:['Đất sét nung tạo cấu trúc xốp tự nhiên, diện tích bề mặt lớn cho vi sinh phát triển.','Không thay đổi pH và độ cứng của nước hồ.','Chi phí thấp, phù hợp cho người mới bắt đầu và hồ gia đình.','Có thể kết hợp với bông lọc, kaldnes để tăng hiệu quả lọc.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:15, name:'Cám Aquar Master 1kg', cat:'thuc-an', catLabel:'Thức ăn', desc:'Cám cao cấp cho cá cảnh và cá Koi, công thức cân bằng dinh dưỡng tối ưu.', price:'185.000đ', priceRaw:185000, rating:4.7, reviews:110, sold:'Đã bán 320+', image:'assets/images/products/thuc-an/cam-aquar-master.jpg', badge:'', badgeText:'', meta:'1kg',
        features:[{icon:'bi-star-fill',main:'Dinh dưỡng toàn diện',sub:'Đủ vitamin & khoáng'},{icon:'bi-heart',main:'Dễ tiêu hóa',sub:'Hạt nhỏ tan chậm'},{icon:'bi-graph-up',main:'Tăng trưởng tốt',sub:'Protein 36%'},{icon:'bi-shield-check',main:'An toàn',sub:'Không chất độc hại'}],
        specs:[['Loại cám','Hạt nổi'],['Kích cỡ hạt','3mm'],['Protein thô','36% min'],['Thành phần','Cá bột, tôm bột, vitamin'],['Trọng lượng','1kg'],['Bảo quản','Nơi khô ráo'],['Hạn sử dụng','18 tháng']],
        adv:['Protein 36% từ cá biển và tôm bột tự nhiên, hỗ trợ tăng trưởng khỏe mạnh.','Vitamin tổng hợp tăng cường hệ miễn dịch, phòng ngừa bệnh tật.','Hạt nhỏ 3mm phù hợp nhiều loại cá cảnh, dễ tiêu hóa.','Không chất bảo quản và phẩm màu nhân tạo, an toàn cho cá và môi trường.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:16, name:'Cám cá Koi 1kg (Koi Pro)', cat:'thuc-an', catLabel:'Thức ăn', desc:'Dòng cám Koi Pro cân bằng 4 yếu tố: tăng trưởng, màu sắc, tiêu hóa và sức đề kháng.', price:'210.000đ', priceRaw:210000, rating:4.8, reviews:95, sold:'Đã bán 410+', image:'assets/images/products/thuc-an/cam-ca-koi-1kg.jpg', badge:'', badgeText:'', meta:'1kg',
        features:[{icon:'bi-bar-chart-fill',main:'4 yếu tố tối ưu',sub:'Tăng trưởng toàn diện'},{icon:'bi-palette2',main:'Tăng màu',sub:'Carotenoid bổ sung'},{icon:'bi-droplet-fill',main:'Nước trong',sub:'Ít chất thải'},{icon:'bi-star-fill',main:'Chất lượng cao',sub:'Nhập khẩu'}],
        specs:[['Loại cám','Nổi mặt nước'],['Kích cỡ hạt','5mm'],['Protein thô','39% min'],['Chất béo','7%'],['Trọng lượng','1kg'],['Bảo quản','Nơi khô ráo, mát'],['Hạn sử dụng','24 tháng']],
        adv:['Công thức 4-in-1: tăng trưởng, tăng màu, hỗ trợ tiêu hóa và tăng đề kháng.','Carotenoid tự nhiên giúp màu sắc cá Koi rực rỡ, bền đẹp theo thời gian.','Ít chất thải hữu cơ, giữ nước hồ sạch và trong hơn.','Không làm đục nước, hạt nổi lâu giúp kiểm soát lượng ăn dễ dàng.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:17, name:'Men tiêu hóa cho cá', cat:'thuc-an', catLabel:'Thức ăn', desc:'Bổ sung men vi sinh hỗ trợ tiêu hóa, tăng hấp thu dinh dưỡng và sức đề kháng cho cá.', price:'95.000đ', priceRaw:95000, rating:4.6, reviews:54, sold:'Đã bán 178+', image:'assets/images/products/thuc-an/men-tieu-hoa.jpg', badge:'moi', badgeText:'Mới', meta:'100g',
        features:[{icon:'bi-bacteria',main:'Vi khuẩn có lợi',sub:'Lactobacillus'},{icon:'bi-heart',main:'Tiêu hóa tốt',sub:'Hấp thu tối đa'},{icon:'bi-shield-fill',main:'Tăng đề kháng',sub:'Phòng bệnh đường ruột'},{icon:'bi-droplet',main:'Bảo vệ nước hồ',sub:'Giảm amoniac'}],
        specs:[['Thành phần','Lactobacillus, Bacillus, enzym tiêu hóa'],['Hàm lượng vi khuẩn','1×10⁹ CFU/g'],['Liều dùng','Trộn vào cám 2-5%'],['Tần suất','Hàng ngày'],['Bảo quản','Nơi khô mát <25°C'],['Trọng lượng','100g'],['Hạn sử dụng','12 tháng']],
        adv:['Lactobacillus và Bacillus sống hỗ trợ hệ tiêu hóa khỏe mạnh, tăng hấp thu dinh dưỡng.','Giúp cá tăng đề kháng tự nhiên, giảm nguy cơ bệnh đường ruột.','Giảm lượng amoniac trong phân cá, bảo vệ chất lượng nước hồ.','Dễ sử dụng, chỉ cần trộn vào thức ăn hàng ngày.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:18, name:'MULTI DETOX xử lý nước', cat:'thuoc-vi-sinh', catLabel:'Thuốc vi sinh', desc:'Sản phẩm xử lý độc tố, kim loại nặng và clo trong nước hồ cá, an toàn tuyệt đối.', price:'120.000đ', priceRaw:120000, rating:4.8, reviews:76, sold:'Đã bán 289+', image:'assets/images/products/thuoc-vi-sinh/multi-detox.png', badge:'ban-chay', badgeText:'Bán chạy', meta:'500ml',
        features:[{icon:'bi-shield-fill',main:'Trung hòa độc tố',sub:'Clo, kim loại nặng'},{icon:'bi-droplet-fill',main:'Nước sạch nhanh',sub:'Hiệu quả ngay lập tức'},{icon:'bi-fish',main:'An toàn cá',sub:'Không gây stress'},{icon:'bi-water',main:'Ổn định pH',sub:'Cân bằng môi trường'}],
        specs:[['Thể tích','500ml'],['Công dụng','Trung hòa clo, kim loại nặng, độc tố'],['Liều dùng','10ml/100L nước'],['Thời gian','Hiệu quả sau 5-10 phút'],['An toàn','Cá, tôm, cây thủy sinh'],['Bảo quản','Tránh ánh nắng trực tiếp'],['Hạn sử dụng','24 tháng']],
        adv:['Trung hòa clo, chloramine và kim loại nặng có trong nước máy ngay lập tức.','Bảo vệ màng nhầy và mang cá khỏi tác hại của hóa chất trong nước.','An toàn tuyệt đối cho cá, tôm, cây thủy sinh và vi sinh vật có lợi.','Nên dùng mỗi khi thay nước mới để bảo vệ cá tốt nhất.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:19, name:'MULTI CLEAR WATER làm trong nước', cat:'thuoc-vi-sinh', catLabel:'Thuốc vi sinh', desc:'Công nghệ keo tụ tiên tiến giúp nước hồ trong veo trong 24-48 giờ.', price:'95.000đ', priceRaw:95000, rating:4.7, reviews:63, sold:'Đã bán 234+', image:'assets/images/products/thuoc-vi-sinh/multi-clear-water-ver-03.jpeg', badge:'', badgeText:'', meta:'300ml',
        features:[{icon:'bi-eye',main:'Trong veo 24h',sub:'Keo tụ cặn hiệu quả'},{icon:'bi-droplet',main:'Dễ sử dụng',sub:'Thêm trực tiếp hồ'},{icon:'bi-fish',main:'An toàn cá',sub:'Không độc hại'},{icon:'bi-recycle',main:'Cặn dễ vớt',sub:'Kết tụ nhanh ra đáy'}],
        specs:[['Thể tích','300ml'],['Cơ chế','Keo tụ cặn lơ lửng'],['Liều dùng','5ml/100L nước'],['Thời gian','24-48 giờ'],['An toàn','Không ảnh hưởng vi sinh'],['Bảo quản','Nơi khô ráo, mát'],['Hạn sử dụng','18 tháng']],
        adv:['Keo tụ các hạt cặn lơ lửng, làm nước trong veo chỉ sau 24-48 giờ.','Cặn kết tụ thành mảng lớn, dễ hút hoặc vớt ra khỏi hồ.','Không tiêu diệt vi sinh vật có lợi trong hệ lọc sinh học.','Hiệu quả đặc biệt khi kết hợp thay nước định kỳ và hệ lọc tốt.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:20, name:'Sứ lọc thanh Hoa Mai 500g', cat:'vat-lieu-loc', catLabel:'Vật liệu lọc', desc:'Sứ lọc dạng thanh cao cấp, diện tích bề mặt lớn, lý tưởng cho ngăn lọc sinh học.', price:'65.000đ', priceRaw:65000, rating:4.7, reviews:48, sold:'Đã bán 198+', image:'assets/images/products/vat-lieu-loc/su-thanh-hoa-mai.jpg', badge:'', badgeText:'', meta:'500g',
        features:[{icon:'bi-bacteria',main:'Diện tích lớn',sub:'>300m²/L'},{icon:'bi-recycle',main:'Bền bỉ',sub:'Không tan, không rã'},{icon:'bi-shield-check',main:'Trơ hóa học',sub:'Không đổi pH'},{icon:'bi-currency-dollar',main:'Kinh tế',sub:'Dùng được nhiều năm'}],
        specs:[['Chất liệu','Sứ cao cấp nung'],['Kích thước','~3×1cm'],['Diện tích bề mặt','>300m²/L'],['Màu sắc','Trắng/kem'],['Trọng lượng','500g'],['Xuất xứ','Việt Nam'],['Tuổi thọ','3-5 năm']],
        adv:['Sứ nung chất lượng cao với hàng triệu lỗ nhỏ là nơi trú ngụ lý tưởng cho vi khuẩn có lợi.','Không tan trong nước, không thay đổi pH và độ cứng của nước hồ.','Diện tích bề mặt >300m²/L giúp tối ưu hóa quá trình lọc sinh học.','Bền bỉ, tuổi thọ 3-5 năm, tiết kiệm chi phí vận hành lâu dài.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:21, name:'Cây Sen Tiger thủy sinh', cat:'cay-thuy-sinh', catLabel:'Cây thủy sinh', desc:'Cây thủy sinh Sen Tiger nổi bật với lá có hoa văn độc đáo, điểm nhấn nghệ thuật cho hồ.', price:'45.000đ', priceRaw:45000, rating:4.8, reviews:67, sold:'Đã bán 345+', image:'assets/images/products/cay-thuy-sinh/sen-tiger.jpg', badge:'moi', badgeText:'Mới', meta:'Chậu nhỏ',
        features:[{icon:'bi-palette2',main:'Hoa văn độc đáo',sub:'Lá vân nâu đặc trưng'},{icon:'bi-tree',main:'Phát triển tốt',sub:'Không cần CO2'},{icon:'bi-sun',main:'Ánh sáng vừa',sub:'Trung bình đến cao'},{icon:'bi-heart',main:'Điểm nhấn đẹp',sub:'Focal point ấn tượng'}],
        specs:[['Tên khoa học','Nymphaea tiger lotus'],['Loại','Cây có củ nước ngọt'],['Ánh sáng','Trung bình đến cao'],['CO2','Không cần nhưng thích'],['Nhiệt độ','22-28°C'],['pH','6.0-7.5'],['Đặc điểm','Lá xanh vân nâu/đỏ']],
        adv:['Lá có hoa văn vân độc đáo tạo điểm nhấn nghệ thuật nổi bật trong hồ thủy sinh.','Phát triển từ củ, không cần CO2, phù hợp cả người mới chơi thủy sinh.','Bộ rễ mạnh hấp thu dinh dưỡng tốt, có thể bón phân nền hoặc phân viên.','Kết hợp đẹp với nền tối và đèn chiếu sáng vừa phải.'],
        ngan:[],hoTypes:[],reviews:[]
      },
      { id:22, name:'Ống lão câu cá trang trí', cat:'thiet-bi', catLabel:'Thiết bị & phụ kiện', desc:'Phụ kiện trang trí hồ cá hình ông lão câu cá, tạo cảnh quan sinh động và thú vị.', price:'75.000đ', priceRaw:75000, rating:4.5, reviews:41, sold:'Đã bán 167+', image:'assets/images/products/phu-kien/ong-lao-cau-ca.webp', badge:'', badgeText:'', meta:'Chống rỉ',
        features:[{icon:'bi-palette2',main:'Trang trí đẹp',sub:'Cảnh quan sinh động'},{icon:'bi-droplet-fill',main:'An toàn nước',sub:'Vật liệu bền chắc'},{icon:'bi-puzzle',main:'Dễ lắp đặt',sub:'Đặt tự do trong hồ'},{icon:'bi-fish',main:'Cá thích',sub:'Bóng dâm & chỗ ẩn'}],
        specs:[['Chất liệu','Nhựa ABS cao cấp + sơn phủ'],['Kích thước','~12×8×15cm'],['Màu sắc','Đa sắc tự nhiên'],['An toàn nước','Không độc hại, không phai màu'],['Phù hợp hồ','Mọi loại hồ cá'],['Bảo quản','Vệ sinh nhẹ nhàng'],['Bảo hành','6 tháng']],
        adv:['Hình ông lão câu cá chân thực, tạo điểm nhấn sinh động và vui tươi cho hồ cá.','Vật liệu nhựa ABS cao cấp, không độc hại, màu sắc bền đẹp trong môi trường nước.','Dễ dàng đặt tự do ở đáy hồ, không cần lắp đặt phức tạp.','Cung cấp bóng dâm và nơi ẩn náu cho cá nhỏ và tôm.'],
        ngan:[],hoTypes:[],reviews:[]
      }
    ];

    var extraProducts = [
      {
            "id": 23,
            "name": "Lọc thùng SunSun Xiaoli XWA 600",
            "cat": "he-thong-loc",
            "image": "assets/images/products/thiet-bi/loc-thung-sunsun-xiaoli-xwa-600.webp",
            "priceRaw": 2890000,
            "priceOld": "3.290.000?",
            "discount": "-12%",
            "meta": "120L",
            "style": "filterCore",
            "badge": "ban-chay",
            "badgeText": "B?n ch?y",
            "sold": "?? b?n 1.154+",
            "rating": 4.9,
            "reviews": 124,
            "popular": true
      },
      {
            "id": 24,
            "name": "Máy lọc chìm Jingye 15W",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/may-loc-chim-jingye-15w.webp",
            "priceRaw": 185000,
            "meta": "15W",
            "style": "equipment",
            "badge": "moi",
            "badgeText": "Mới",
            "sold": "Đã bán 234+",
            "rating": 4.6,
            "reviews": 44
      },
      {
            "id": 25,
            "name": "Máy bơm đẩy Hsbao FP",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/may-bom-day-hsbao-fp.webp",
            "priceRaw": 450000,
            "meta": "35W",
            "style": "equipment",
            "sold": "Đã bán 189+",
            "rating": 4.7,
            "reviews": 52
      },
      {
            "id": 26,
            "name": "Máy bơm hồ cá Lifetech AP",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/may-bom-ho-ca-lifetech-ap.webp",
            "priceRaw": 520000,
            "meta": "50W",
            "style": "equipment",
            "sold": "Đã bán 121+",
            "rating": 4.7,
            "reviews": 38
      },
      {
            "id": 27,
            "name": "Máy sủi oxy tích điện Baoyu BY-A3/A5",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/may-sui-oxy-baoyu-by-a3-a5.webp",
            "priceRaw": 265000,
            "meta": "Tích điện",
            "style": "equipment",
            "badge": "moi",
            "badgeText": "Mới",
            "sold": "Đã bán 208+",
            "rating": 4.8,
            "reviews": 61
      },
      {
            "id": 28,
            "name": "Đèn LED Aqua Plus Apollo 11 màu",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/den-led-aqua-plus-apollo-11-mau.webp",
            "priceRaw": 680000,
            "meta": "11 chế độ",
            "style": "lighting",
            "sold": "Đã bán 156+",
            "rating": 4.8,
            "reviews": 39
      },
      {
            "id": 29,
            "name": "Đĩa sủi cho bể cá",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/dia-sui-cho-be-ca.webp",
            "priceRaw": 65000,
            "meta": "Sủi mịn",
            "style": "equipment",
            "sold": "Đã bán 412+",
            "rating": 4.5,
            "reviews": 27
      },
      {
            "id": 30,
            "name": "Ống lắng tách cặn bể cá",
            "cat": "thiet-bi",
            "image": "assets/images/products/thiet-bi/ong-lang-tach-can-be-ca.webp",
            "priceRaw": 125000,
            "meta": "Chống cặn",
            "style": "filterCore",
            "sold": "Đã bán 144+",
            "rating": 4.6,
            "reviews": 22
      },
      {
            "id": 31,
            "name": "Bông lọc",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/bong-loc.webp",
            "priceRaw": 45000,
            "meta": "1 tấm",
            "style": "media",
            "badge": "ban-chay",
            "badgeText": "Bán chạy",
            "sold": "Đã bán 1.020+",
            "rating": 4.8,
            "reviews": 80
      },
      {
            "id": 32,
            "name": "Hạt lọc Kaldnes K3 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/hat-loc-kaldnes.webp",
            "priceRaw": 55000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 567+",
            "rating": 4.9,
            "reviews": 98,
            "popular": true
      },
      {
            "id": 33,
            "name": "Đá nham thạch đỏ",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/da-nham-thach-do.webp",
            "priceRaw": 65000,
            "meta": "1kg",
            "style": "media",
            "sold": "Đã bán 388+",
            "rating": 4.7,
            "reviews": 41
      },
      {
            "id": 34,
            "name": "Bi đỏ Đài Loan 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/bi-do-dai-loan.jpg",
            "priceRaw": 45000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 456+",
            "rating": 4.8,
            "reviews": 62
      },
      {
            "id": 35,
            "name": "Bi đen Đài Loan 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/bi-den-dai-loan.jpg",
            "priceRaw": 47000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 492+",
            "rating": 4.8,
            "reviews": 58
      },
      {
            "id": 36,
            "name": "Sứ trụ ngũ sắc Đài Loan 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/su-tru-ngu-sac-dai-loan.jpg",
            "priceRaw": 69000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 278+",
            "rating": 4.7,
            "reviews": 33
      },
      {
            "id": 37,
            "name": "Sứ thanh Muối Tiêu 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/su-thanh-muoi-tieu.jpg",
            "priceRaw": 65000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 305+",
            "rating": 4.7,
            "reviews": 28
      },
      {
            "id": 38,
            "name": "Sứ thanh Hoa Mai 500g",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/su-thanh-hoa-mai.jpg",
            "priceRaw": 65000,
            "meta": "500g",
            "style": "media",
            "sold": "Đã bán 198+",
            "rating": 4.7,
            "reviews": 48
      },
      {
            "id": 39,
            "name": "San hô lọc",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/vat-lieu-loc/san-ho.webp",
            "priceRaw": 88000,
            "meta": "1kg",
            "style": "media",
            "sold": "Đã bán 214+",
            "rating": 4.7,
            "reviews": 36
      },
      {
            "id": 40,
            "name": "Cát nền",
            "cat": "vat-lieu-loc",
            "image": "assets/images/products/phu-kien/cat-nen.webp",
            "priceRaw": 59000,
            "meta": "Nền hồ",
            "style": "media",
            "sold": "Đã bán 618+",
            "rating": 4.6,
            "reviews": 45
      },
      {
            "id": 41,
            "name": "Cầu tảo Marimo",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cau-tao-marimo.jpg",
            "priceRaw": 45000,
            "meta": "Mini",
            "style": "plant",
            "badge": "moi",
            "badgeText": "Mới",
            "sold": "Đã bán 301+",
            "rating": 4.7,
            "reviews": 24
      },
      {
            "id": 42,
            "name": "Nhà mini trang trí",
            "cat": "thiet-bi",
            "image": "assets/images/products/phu-kien/nha-mini.webp",
            "priceRaw": 98000,
            "meta": "Trang trí",
            "style": "decor",
            "sold": "Đã bán 166+",
            "rating": 4.5,
            "reviews": 31
      },
      {
            "id": 43,
            "name": "Cầu non bộ",
            "cat": "thiet-bi",
            "image": "assets/images/products/phu-kien/cau-non-bo.jpg",
            "priceRaw": 125000,
            "meta": "Trang trí",
            "style": "decor",
            "sold": "Đã bán 178+",
            "rating": 4.6,
            "reviews": 26
      },
      {
            "id": 44,
            "name": "Ông lão câu cá trang trí",
            "cat": "thiet-bi",
            "image": "assets/images/products/phu-kien/ong-lao-cau-ca.webp",
            "priceRaw": 75000,
            "meta": "Chống rỉ",
            "style": "decor",
            "sold": "Đã bán 167+",
            "rating": 4.5,
            "reviews": 41
      },
      {
            "id": 45,
            "name": "Tượng Ngộ Không trang trí",
            "cat": "thiet-bi",
            "image": "assets/images/products/phu-kien/tuong-ngo-khong.png",
            "priceRaw": 89000,
            "meta": "Trang trí",
            "style": "decor",
            "sold": "Đã bán 223+",
            "rating": 4.6,
            "reviews": 35
      },
      {
            "id": 46,
            "name": "Cây thủy cúc",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-thuy-cuc.webp",
            "priceRaw": 35000,
            "meta": "Bụi",
            "style": "plant",
            "badge": "ban-chay",
            "badgeText": "Bán chạy",
            "sold": "Đã bán 1.204+",
            "rating": 4.8,
            "reviews": 68
      },
      {
            "id": 47,
            "name": "Cây sen mini",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-sen-mini.webp",
            "priceRaw": 45000,
            "meta": "Chậu nhỏ",
            "style": "plant",
            "badge": "moi",
            "badgeText": "Mới",
            "sold": "Đã bán 340+",
            "rating": 4.7,
            "reviews": 39
      },
      {
            "id": 48,
            "name": "Cây rau má hương",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-rau-ma-huong.jpg",
            "priceRaw": 30000,
            "meta": "Bụi nhỏ",
            "style": "plant",
            "sold": "Đã bán 688+",
            "rating": 4.7,
            "reviews": 44
      },
      {
            "id": 49,
            "name": "Cây lưỡi mác",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-luoi-mac.webp",
            "priceRaw": 32000,
            "meta": "Bụi",
            "style": "plant",
            "sold": "Đã bán 742+",
            "rating": 4.7,
            "reviews": 40
      },
      {
            "id": 50,
            "name": "Cây dương xỉ Châu Phi",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-duong-xi-chau-phi.jpg",
            "priceRaw": 42000,
            "meta": "Bụi",
            "style": "plant",
            "sold": "Đã bán 555+",
            "rating": 4.7,
            "reviews": 37
      },
      {
            "id": 51,
            "name": "Cây cỏ thìa",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/cay-co-thia.webp",
            "priceRaw": 28000,
            "meta": "Thảm nền",
            "style": "plant",
            "sold": "Đã bán 801+",
            "rating": 4.7,
            "reviews": 52
      },
      {
            "id": 52,
            "name": "Dương xỉ Java",
            "cat": "cay-thuy-sinh",
            "image": "assets/images/products/cay-thuy-sinh/duong-xi-java.webp",
            "priceRaw": 35000,
            "meta": "Bụi nhỏ",
            "style": "plant",
            "badge": "ban-chay",
            "badgeText": "Bán chạy",
            "sold": "Đã bán 891+",
            "rating": 4.8,
            "reviews": 143,
            "popular": true
      }
];

    var knownReviewCounts = {1:128,2:215,3:87,4:73,5:164,6:52,7:39,8:98,9:143,10:67,11:88,12:44,13:89,14:62,15:110,16:95,17:54,18:76,19:63,20:48,21:67,22:41};

    products = products.map(enrichProduct).concat(extraProducts.map(enrichProduct));

    function enrichProduct(p){
      var labels = {
        'he-thong-loc':'Hệ thống lọc',
        'thuc-an':'Thức ăn',
        'thuoc-vi-sinh':'Thuốc vi sinh',
        'vat-lieu-loc':'Vật liệu lọc',
        'cay-thuy-sinh':'Cây thủy sinh',
        'thiet-bi':'Thiết bị & phụ kiện'
      };
    
      var templates = {
        filterCore: {
          desc: function(item){ return 'Sản phẩm lọc chuyên dụng giúp hồ cá vận hành ổn định, hỗ trợ giữ nước trong và giảm cặn bẩn cho ' + item.meta + '.'; },
          features: function(){ return [{icon:'bi-funnel-fill',main:'Lọc sạch',sub:'Giữ nước ổn định'},{icon:'bi-shield-check',main:'Bền bỉ',sub:'Vật liệu chắc chắn'},{icon:'bi-water',main:'Dễ vệ sinh',sub:'Bảo trì thuận tiện'},{icon:'bi-lightning-charge',main:'Tối ưu vận hành',sub:'Tiết kiệm điện'}]; },
          specs: function(item){ return [['Dòng sản phẩm', item.name],['Ứng dụng', 'Hồ cá cảnh / hồ Koi'],['Quy mô phù hợp', item.meta || 'Nhiều dung tích'],['Bảo dưỡng', 'Định kỳ dễ dàng'],['Vật liệu', 'Nhựa / sứ / lọc sinh học'],['Bảo hành', 'Theo sản phẩm']]; },
          adv: function(){ return ['Hỗ trợ làm sạch nước và giữ hệ lọc hoạt động ổn định.','Thiết kế tối ưu cho quá trình thay thế vật liệu và vệ sinh.','Phù hợp hồ gia đình lẫn hồ cảnh quan ngoài trời.','Giúp giảm cặn lơ lửng, hỗ trợ vi sinh có lợi phát triển.']; },
          reviews: [{name:'Hoàng Nam',loc:'TP.HCM',stars:5,text:'Lắp vào là thấy nước ổn định và dễ bảo trì hơn hẳn.'},{name:'Thu Hà',loc:'Đà Nẵng',stars:5,text:'Đáng tiền, hệ lọc vận hành êm và nước trong nhanh hơn.'},{name:'Minh Khang',loc:'Bình Dương',stars:5,text:'Dễ dùng, dễ vệ sinh, rất hợp cho hồ gia đình.'}]
        },
        media: {
          desc: function(item){ return 'Vật liệu lọc sinh học / cơ học hỗ trợ vi sinh bám dính, giúp hồ nước ổn định và giảm độc tố cho ' + item.meta + '.'; },
          features: function(){ return [{icon:'bi-bacteria',main:'Vi sinh bám tốt',sub:'Tăng diện tích bề mặt'},{icon:'bi-recycle',main:'Tái sử dụng',sub:'Vệ sinh và dùng lại'},{icon:'bi-droplet-fill',main:'Ổn định nước',sub:'Hỗ trợ lọc lâu dài'},{icon:'bi-currency-dollar',main:'Kinh tế',sub:'Chi phí hợp lý'}]; },
          specs: function(item){ return [['Nhóm', 'Vật liệu lọc sinh học'],['Ứng dụng', 'Ngăn lọc / lọc trần'],['Quy cách', item.meta || 'Túi / kg'],['Tái sử dụng', 'Có'],['Ảnh hưởng pH', 'Thấp'],['Bảo quản', 'Khô thoáng']]; },
          adv: function(){ return ['Tăng diện tích bám cho vi sinh có lợi trong hồ.','Hỗ trợ giảm amoniac và nitrite theo thời gian.','Phù hợp cho cả hồ mới và hồ đã vận hành lâu năm.','Dễ phối hợp cùng bông lọc, sứ lọc và Kaldnes.']; },
          reviews: [{name:'An Nhiên',loc:'TP.HCM',stars:5,text:'Vật liệu lọc rất dễ vệ sinh và hồ trong ổn định hơn.'},{name:'Quốc Bảo',loc:'Hà Nội',stars:5,text:'Hồ cá giảm đục thấy rõ sau khi thay media.'},{name:'Ngọc Trâm',loc:'Cần Thơ',stars:5,text:'Dùng bền, hiệu quả tốt cho ngăn lọc của mình.'}]
        },
        plant: {
          desc: function(item){ return 'Cây thủy sinh dễ chăm, thích hợp cho người mới và giúp tạo mảng xanh tự nhiên cho hồ cá / hồ thủy sinh. ' + (item.meta || ''); },
          features: function(){ return [{icon:'bi-tree',main:'Dễ trồng',sub:'Hợp người mới'},{icon:'bi-droplet-fill',main:'Thích nước',sub:'Phát triển ổn định'},{icon:'bi-sun',main:'Ánh sáng vừa',sub:'Dễ chăm sóc'},{icon:'bi-heart',main:'Tăng thẩm mỹ',sub:'Làm đẹp bố cục'}]; },
          specs: function(item){ return [['Nhóm', 'Cây thủy sinh'],['Ánh sáng', 'Thấp đến vừa'],['CO2', 'Không bắt buộc'],['Nhiệt độ', '22-28°C'],['Đặc tính', 'Dễ chăm, ít lá'],['Quy cách', item.meta || 'Bụi nhỏ']]; },
          adv: function(){ return ['Tạo mảng xanh tự nhiên và điểm nhấn cho bố cục hồ.','Nhiều loại dễ trồng, không đòi hỏi CO2 phức tạp.','Giúp cân bằng cảnh quan và tạo cảm giác thư giãn.','Phù hợp để ghép với đá, lũa và nền sẫm màu.']; },
          reviews: [{name:'Kim Anh',loc:'Huế',stars:5,text:'Cây lớn rất đều, hồ nhìn tự nhiên và mềm hơn nhiều.'},{name:'Thanh Tùng',loc:'TP.HCM',stars:5,text:'Loại này dễ trồng, ít phải chăm mà vẫn đẹp.'},{name:'Mai Phương',loc:'Nha Trang',stars:5,text:'Rất hợp người mới như mình, cảm là lên.'}]
        },
        equipment: {
          desc: function(item){ return 'Thiết bị hỗ trợ hồ cá với hiệu suất ổn định, vận hành êm và dễ lắp đặt cho ' + item.meta + '.'; },
          features: function(){ return [{icon:'bi-lightning-charge',main:'Tiết kiệm điện',sub:'Tối ưu công suất'},{icon:'bi-volume-mute',main:'Vận hành êm',sub:'Giảm tiếng ồn'},{icon:'bi-droplet-fill',main:'Đa năng',sub:'Phù hợp nhiều hồ'},{icon:'bi-shield-check',main:'An toàn',sub:'Dùng bền ổn định'}]; },
          specs: function(item){ return [['Nhóm', 'Thiết bị hồ cá'],['Quy cách', item.meta || 'Một size'],['Công suất', item.priceRaw > 400000 ? 'Cao / ổn định' : 'Tiết kiệm điện'],['Lắp đặt', 'Dễ'],['Bảo trì', 'Đơn giản'],['Bảo hành', 'Theo hãng']]; },
          adv: function(){ return ['Phù hợp hệ thống hồ gia đình và hồ cảnh quan.','Dễ lắp đặt, dễ bảo trì và dễ thay thế linh kiện.','Hỗ trợ tối ưu lưu thông nước và oxy cho cá.','Giúp vận hành hồ đều và ổn định hơn mỗi ngày.']; },
          reviews: [{name:'Trọng Nghĩa',loc:'TP.HCM',stars:5,text:'Máy chạy êm, lắp nhanh và hoạt động ổn.'},{name:'Bảo Ngọc',loc:'Bình Dương',stars:5,text:'Thiết bị phù hợp hồ nhỏ của gia đình mình.'},{name:'Quang Huy',loc:'Hà Nội',stars:5,text:'Dùng khá yên tâm, tiết kiệm điện rõ.'}]
        },
        lighting: {
          desc: function(item){ return 'Đèn LED cho hồ thủy sinh / hồ cá cảnh, hỗ trợ ánh sáng đẹp và làm nổi màu cây cá theo ' + item.meta + '.'; },
          features: function(){ return [{icon:'bi-lightbulb-fill',main:'Nhiều chế độ',sub:'Điều chỉnh linh hoạt'},{icon:'bi-droplet-fill',main:'Chống nước',sub:'An toàn IP68'},{icon:'bi-palette2',main:'Tôn màu',sub:'Cây cá nổi bật'},{icon:'bi-phone',main:'Dễ điều khiển',sub:'Remote / app'}]; },
          specs: function(item){ return [['Nhóm', 'Đèn hồ thủy sinh'],['Chế độ', 'Nhiều chế độ màu'],['Chống nước', 'Có'],['Ứng dụng', 'Hồ cá / hồ cây'],['Bảo hành', 'Theo hãng'],['Quy cách', item.meta || '1 bộ']]; },
          adv: function(){ return ['Làm nổi màu sắc của cá và cây trong hồ.','Ánh sáng đều, hỗ trợ bố cục đẹp hơn vào buổi tối.','Thiết kế gọn, dễ lắp đặt và điều chỉnh.','Phù hợp hồ trang trí và hồ thủy sinh hiện đại.']; },
          reviews: [{name:'Lan Anh',loc:'Đà Nẵng',stars:5,text:'Đèn đẹp, màu lên hồ rất rõ và sang.'},{name:'Minh Đức',loc:'TP.HCM',stars:5,text:'Nhiều chế độ, dễ chỉnh cho hồ nhỏ của mình.'},{name:'Hồng Nhung',loc:'Hải Phòng',stars:5,text:'Lắp lên hồ nhìn hơn chuyên nghiệp hơn.'}]
        },
        decor: {
          desc: function(item){ return 'Món trang trí hồ cá giúp tạo chiều sâu cảnh quan và điểm nhấn tự nhiên cho hồ / bể cảnh.'; },
          features: function(){ return [{icon:'bi-palette2',main:'Trang trí đẹp',sub:'Tạo điểm nhấn'},{icon:'bi-droplet-fill',main:'An toàn nước',sub:'Vật liệu bền'},{icon:'bi-puzzle',main:'Dễ bố trí',sub:'Đặt linh hoạt'},{icon:'bi-fish',main:'Cá thích',sub:'Tạo chỗ trú'}]; },
          specs: function(item){ return [['Nhóm', 'Phụ kiện trang trí'],['Quy cách', item.meta || 'Mini'],['Chất liệu', 'Nhựa / composite / resin'],['An toàn nước', 'Có'],['Bảo quản', 'Vệ sinh nhẹ'],['Ứng dụng', 'Hồ cá / bể cảnh']]; },
          adv: function(){ return ['Giúp hồ cá sinh động và có chiều sâu hơn.','Vật liệu bền, phù hợp môi trường nước.','Dễ phối với đá, nền và cây thủy sinh.','Tạo nơi trú ẩn nhỏ cho cá nhỏ.']; },
          reviews: [{name:'Việt Anh',loc:'TP.HCM',stars:5,text:'Trang trí xong hồ nhìn có hồn hơn hẳn.'},{name:'Hà My',loc:'Đồng Nai',stars:5,text:'Phụ kiện đẹp, đặt rất dễ.'},{name:'Thanh Sơn',loc:'Bình Thuận',stars:5,text:'Cá cũng thích có chỗ ẩn và hồ đẹp hơn.'}]
        },
        foodGrowth: {
          desc: function(item){ return 'Thức ăn tăng trưởng cao cho cá Koi / cá cảnh, hỗ trợ lớn nhanh và giữ thể trọng đẹp. ' + (item.meta || ''); },
          features: function(){ return [{icon:'bi-graph-up',main:'Tăng trưởng tốt',sub:'Đạm dinh dưỡng'},{icon:'bi-heart',main:'Dễ tiêu hóa',sub:'Hấp thu tốt'},{icon:'bi-palette2',main:'Hỗ trợ màu',sub:'Màu cá đẹp hơn'},{icon:'bi-shield-check',main:'An toàn',sub:'Ít làm đục nước'}]; },
          specs: function(item){ return [['Nhóm', 'Thức ăn tăng trưởng'],['Protein', 'Cao'],['Quy cách', item.meta || '1kg'],['Dạng', 'Hạt nổi / chìm'],['Bảo quản', 'Khô ráo'],['Hạn dùng', 'Theo sản phẩm']]; },
          adv: function(){ return ['Công thức cân bằng để cá tăng trưởng ổn định.','Hỗ trợ thể trọng khỏe và màu sắc tươi hơn.','Phù hợp cho cá Koi, cá chép, cá cảnh cỡ lớn.','Dễ cho ăn, ít vụn vỡ và ít làm bẩn nước hơn.']; },
          reviews: [{name:'Hữu Phúc',loc:'TP.HCM',stars:5,text:'Cá ăn rất mạnh, lớn đều và lên form tốt.'},{name:'Kim Cương',loc:'Đà Lạt',stars:5,text:'Thức ăn thơm, cá cực kỳ thích.'},{name:'Anh Tuấn',loc:'Bình Phước',stars:5,text:'Dùng khá tiết kiệm mà đàn cá khỏe hơn.'}]
        },
        foodColor: {
          desc: function(item){ return 'Thức ăn hỗ trợ lên màu và tăng sức khỏe cho cá Koi, tập trung vào sắc tố tự nhiên và tiêu hóa.'; },
          features: function(){ return [{icon:'bi-palette2',main:'Lên màu đẹp',sub:'Sắc tố tự nhiên'},{icon:'bi-graph-up',main:'Tăng form',sub:'Cân bằng dinh dưỡng'},{icon:'bi-heart',main:'Khỏe cá',sub:'Hỗ trợ tiêu hóa'},{icon:'bi-shield-check',main:'Ổn định nước',sub:'Ít cặn thừa'}]; },
          specs: function(item){ return [['Nhóm', 'Thức ăn tăng màu'],['Quy cách', item.meta || '1kg'],['Dạng', 'Hạt nổi'],['Đối tượng', 'Koi / cá cảnh'],['Bảo quản', 'Khô mát'],['Hạn dùng', 'Theo sản phẩm']]; },
          adv: function(){ return ['Tăng cường sắc tố và độ tươi màu cho cá.','Thành phần cân đối để cá ăn đều và lớn khỏe.','Phù hợp cho giai đoạn cần nâng màu hoặc show cá.','Dễ cho ăn hàng ngày, ít vụn hơn cám thông thường.']; },
          reviews: [{name:'Bảo Trân',loc:'TP.HCM',stars:5,text:'Màu cá lên rõ sau một thời gian ngắn.'},{name:'Quang Vinh',loc:'Long An',stars:5,text:'Cá ăn đều, form đẹp và không hao cám.'},{name:'Minh Tâm',loc:'Hà Nội',stars:5,text:'Rất hợp cho koi show của mình.'}]
        },
        foodCare: {
          desc: function(item){ return 'Dòng thức ăn bổ trợ tiêu hóa, thích hợp cho cá cảnh cần phục hồi hoặc tăng sức đề kháng.'; },
          features: function(){ return [{icon:'bi-bacteria',main:'Hỗ trợ ruột',sub:'Men có lợi'},{icon:'bi-heart',main:'Phục hồi nhanh',sub:'Tăng hấp thu'},{icon:'bi-droplet-fill',main:'Ít bẩn nước',sub:'Dễ quản lý'},{icon:'bi-shield-check',main:'Sức khỏe tốt',sub:'Dùng hàng ngày'}]; },
          specs: function(item){ return [['Nhóm', 'Thức ăn bổ trợ'],['Quy cách', item.meta || '100g'],['Dạng', 'Bột / hạt'],['Ứng dụng', 'Trộn cám'],['Bảo quản', 'Kín, khô ráo'],['Hạn dùng', 'Theo sản phẩm']]; },
          adv: function(){ return ['Hỗ trợ đường ruột và khả năng hấp thu dinh dưỡng.','Giúp cá phục hồi tốt hơn sau stress hoặc thay nước.','Dễ dùng bằng cách trộn vào khẩu phần hàng ngày.','Phù hợp nuôi lâu dài để giữ đàn cá ổn định.']; },
          reviews: [{name:'Diệu Linh',loc:'TP.HCM',stars:5,text:'Cá ăn tốt hơn hẳn sau khi dùng.'},{name:'Hoài Nam',loc:'Đà Nẵng',stars:5,text:'Khá ổn, hồ sạch hơn và cá khỏe hơn.'},{name:'Thanh Mai',loc:'Huế',stars:5,text:'Rất tiện khi trộn vào cám.'}]
        },
        conditioner: {
          desc: function(item){ return 'Nhóm xử lý nước giúp giảm độc tố, ổn định môi trường và hỗ trợ vi sinh hoạt động hiệu quả.'; },
          features: function(){ return [{icon:'bi-droplet-fill',main:'Làm sạch nước',sub:'Xử lý nhanh'},{icon:'bi-shield-check',main:'An toàn cá',sub:'Giảm stress'},{icon:'bi-bacteria',main:'Hỗ trợ vi sinh',sub:'Ổn định hệ'},{icon:'bi-water',main:'Dễ dùng',sub:'Liều rõ ràng'}]; },
          specs: function(item){ return [['Nhóm', 'Xử lý nước / vi sinh'],['Quy cách', item.meta || '500ml'],['Công dụng', 'Giảm độc tố / làm trong'],['Cách dùng', 'Theo hướng dẫn'],['Bảo quản', 'Mát, tránh nắng'],['Hạn dùng', 'Theo sản phẩm']]; },
          adv: function(){ return ['Hỗ trợ giảm clo, amoniac, nitrite hoặc cặn lơ lửng theo sản phẩm.','Dùng tiện cho hồ mới setup hoặc sau khi thay nước.','Giúp đàn cá bớt stress và môi trường ổn định hơn.','Kết hợp tốt với hệ lọc và vi sinh có lợi.']; },
          reviews: [{name:'Văn Toàn',loc:'TP.HCM',stars:5,text:'Nước trong nhanh, cá bơi khỏe hơn.'},{name:'Hằng Anh',loc:'Bình Dương',stars:5,text:'Rất hữu ích cho hồ mới.'},{name:'Bình An',loc:'Cần Thơ',stars:5,text:'Dùng xong màu nước nhẹ hơn thấy rõ.'}]
        },
        default: {
          desc: function(item){ return 'Sản phẩm chăm sóc hồ cá tiện dụng, phù hợp cho nhiều kiểu setup và nhu cầu sử dụng.'; },
          features: function(){ return [{icon:'bi-star-fill',main:'Tiện dụng',sub:'Dễ dùng'},{icon:'bi-shield-check',main:'Bền',sub:'Ổn định'},{icon:'bi-droplet-fill',main:'Thân thiện',sub:'Cho hồ cá'},{icon:'bi-bag-check-fill',main:'Đáng chọn',sub:'Hữu ích'}]; },
          specs: function(item){ return [['Nhóm', 'Sản phẩm Aqua Care'],['Quy cách', item.meta || '1 món'],['Ứng dụng', 'Hồ cá cảnh'],['Bảo quản', 'Khô thoáng'],['Bảo hành', 'Theo hãng'],['Ghi chú', 'Xem mô tả chi tiết']]; },
          adv: function(){ return ['Thiết kế gọn và dễ dùng cho hồ cá gia đình.','Hỗ trợ setup và chăm sóc hồ thuận tiện hơn.','Dễ kết hợp với các nhóm sản phẩm khác của Aqua Care.','Phù hợp cả người mới lẫn người chơi lâu năm.']; },
          reviews: [{name:'Khánh Vy',loc:'TP.HCM',stars:5,text:'Mua về dùng rất hợp, đúng thứ mình cần.'},{name:'Phúc Lâm',loc:'Hà Nội',stars:5,text:'Dễ dùng, chất lượng ổn.'},{name:'Thu Phương',loc:'Đà Nẵng',stars:5,text:'Sản phẩm rất hữu ích cho hồ nhỏ của mình.'}]
        }
      };
    
      if (p.features && p.specs && p.adv) {
        var existingReviewList = Array.isArray(p.reviews) ? p.reviews : [];
        return Object.assign({}, p, {
          reviewCount: knownReviewCounts[p.id] || (typeof p.reviewCount === 'number' ? p.reviewCount : (typeof p.reviews === 'number' ? p.reviews : existingReviewList.length)),
          reviews: existingReviewList
        });
      }
      var tpl = templates[p.style] || templates.default;
      var reviewList = Array.isArray(p.reviews) ? p.reviews : tpl.reviews;
      return Object.assign({}, p, {
        catLabel: labels[p.cat] || p.catLabel || 'Sản phẩm',
        price: p.price || (p.priceRaw ? p.priceRaw.toLocaleString('vi-VN') + 'đ' : ''),
        badgeText: p.badgeText || (p.badge === 'moi' ? 'Mới' : p.badge === 'ban-chay' ? 'Bán chạy' : p.badge === 'sale' ? 'Giảm giá' : ''),
        desc: p.desc || tpl.desc(p),
        features: tpl.features(p),
        specs: tpl.specs(p),
        adv: tpl.adv(p),
        reviewCount: knownReviewCounts[p.id] || (typeof p.reviewCount === 'number' ? p.reviewCount : (typeof p.reviews === 'number' ? p.reviews : reviewList.length)),
        reviews: reviewList
      });
    }

    var currentCat = 'all';
    var currentProduct = null;

    
    function stars(r){
      var s='';
      for(var i=1;i<=5;i++) s += i<=Math.floor(r)?'★':(i-r<1&&i-r>0?'⯨':'☆');
      return s;
    }

    function toast(msg){
      var t=document.getElementById('toastNotif');
      t.textContent=msg; t.classList.add('show');
      setTimeout(function(){t.classList.remove('show');},2800);
    }

    
    function showList(){
      document.getElementById('productListView').style.display='block';
      document.getElementById('productDetailView').style.display='none';
    }

    window.filterCat = function(cat){
      currentCat = cat;
      showList();
      // Update sidebar active state
      document.querySelectorAll('#sidebarCatList a').forEach(function(a){
        a.classList.remove('active');
        var onclick = a.getAttribute('onclick')||'';
        if(cat==='all' && onclick.includes("'all'")) a.classList.add('active');
        else if(cat!=='all' && onclick.includes("'"+cat+"'")) a.classList.add('active');
      });
      // Update mobile tabs active state
      document.querySelectorAll('.sp-mobile-cat-btn').forEach(function(btn){
        btn.classList.remove('active');
        var onclick = btn.getAttribute('onclick')||'';
        if(cat==='all' && onclick.includes("'all'")) btn.classList.add('active');
        else if(cat!=='all' && onclick.includes("'"+cat+"'")) btn.classList.add('active');
      });
      renderProductGrid();
      // Update breadcrumb
      var names={all:'Tất cả sản phẩm','he-thong-loc':'Hệ thống lọc','thuc-an':'Thức ăn & dinh dưỡng','thuoc-vi-sinh':'Thuốc & vi sinh','vat-lieu-loc':'Vật liệu lọc','cay-thuy-sinh':'Cây thủy sinh','thiet-bi':'Thiết bị & phụ kiện'};
      document.getElementById('breadcrumbCat').textContent = names[cat]||'Tất cả sản phẩm';
      // Scroll to top of product list
      document.getElementById('spLayout').scrollIntoView({behavior:'smooth',block:'start'});
    };

    
    function renderProductGrid(){
      var filtered = currentCat==='all' ? products.slice() : products.filter(function(p){return p.cat===currentCat;});
      // search
      var q = document.getElementById('searchInput').value.toLowerCase();
      if(q) filtered = filtered.filter(function(p){return p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q);});
      
      // Quick filter
      var filterBest = document.getElementById('filter-best-seller');
      var filterNew = document.getElementById('filter-new-arrival');
      var filterSale = document.getElementById('filter-on-sale');
      var filterRating = document.getElementById('filter-high-rating');

      // Synchronize desktop states to mobile checkboxes
      ['filter-best-seller', 'filter-new-arrival', 'filter-on-sale', 'filter-high-rating'].forEach(function(id){
        var cb = document.getElementById(id);
        var mCb = document.getElementById('m-' + id);
        if (cb && mCb) mCb.checked = cb.checked;
      });

      if (filterBest && filterBest.checked) {
        filtered = filtered.filter(function(p) { return p.badge === 'ban-chay'; });
      }
      if (filterNew && filterNew.checked) {
        filtered = filtered.filter(function(p) { return p.badge === 'moi'; });
      }
      if (filterSale && filterSale.checked) {
        filtered = filtered.filter(function(p) { return p.discount || p.priceOld; });
      }
      if (filterRating && filterRating.checked) {
        filtered = filtered.filter(function(p) { return p.rating >= 4.5; });
      }

      // Sort dynamically without mutating the main products array
      var sortVal = document.getElementById('sortSelect').value;
      if (sortVal === 'price-asc') {
        filtered.sort(function(a,b){return a.priceRaw-b.priceRaw;});
      } else if (sortVal === 'price-desc') {
        filtered.sort(function(a,b){return b.priceRaw-a.priceRaw;});
      } else if (sortVal === 'rating') {
        filtered.sort(function(a,b){return b.rating-a.rating;});
      } else if (sortVal === 'popular') {
        filtered.sort(function(a,b){return (b.popular?1:0)-(a.popular?1:0);});
      } else {
        filtered.sort(function(a,b){return a.id-b.id;}); // default sorting restores original order by ID ascending
      }

      document.getElementById('resultCount').textContent = filtered.length;
      var grid = document.getElementById('productGrid');
      grid.innerHTML = filtered.map(function(p){
        return '<div class="col-6 col-md-4">' +
          '<div class="product-card-new">' +
            (p.badge?'<span class="product-badge '+p.badge+'">'+p.badgeText+'</span>':'') +
            '<div class="product-img-wrap"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'assets/images/categories/phu-kien.png\'"></div>' +
            '<div class="product-card-body">' +
              '<span class="product-cat-label">'+p.catLabel+'</span>' +
              '<h5 class="product-name">'+p.name+'</h5>' +
              '<p class="product-meta-info">'+p.desc.substring(0,60)+'...</p>' +
              '<div class="product-stars"><span class="stars">'+stars(p.rating)+'</span><span class="review-count">('+p.reviewCount+')</span></div>' +
              '<div class="product-price-row">' +
                '<span class="product-price">'+p.price+'</span>' +
                (p.priceOld?'<span class="product-price-old">'+p.priceOld+'</span>':'') +
                (p.discount?'<span class="product-discount">'+p.discount+'</span>':'') +
              '</div>' +
              '<div class="product-actions">' +
                '<button class="btn-mua-ngay" onclick="openBuyModal('+p.id+')"><i class="bi bi-bag-fill me-1"></i>Mua ngay</button>' +
                '<button class="btn-xem-chi-tiet" onclick="showDetail('+p.id+')">Chi tiết</button>' +
              '</div>' +
            '</div>' +
          '</div></div>';
      }).join('');
    }

    
    window.showDetail = function(id){
      var p = products.find(function(x){return x.id===id;});
      if(!p) return;
      currentProduct = p;

      document.getElementById('productListView').style.display='none';
      document.getElementById('productDetailView').style.display='block';

      // populate
      document.getElementById('pdBreadCat').textContent = p.catLabel;
      document.getElementById('pdBreadName').textContent = p.name;
      document.getElementById('pdCategory').textContent = p.catLabel + ' › ' + p.meta;
      document.getElementById('pdTitle').innerHTML = p.name + ' <i class="bi bi-water" style="color:#2bb6e8;font-size:0.6em;"></i>';
      document.getElementById('pdSubtitle').textContent = p.desc;
      document.getElementById('pdStars').textContent = stars(p.rating) + ' ' + p.rating;
      document.getElementById('pdReviews').textContent = p.reviewCount + ' đánh giá';
      document.getElementById('pdSold').textContent = p.sold;
      document.getElementById('pdMainImg').src = p.image;
      document.getElementById('pdMainImg').alt = p.name;
      document.getElementById('pdMainImg').onerror = function(){this.src='assets/images/categories/phu-kien.png';};
      document.getElementById('pdPrice').textContent = p.price;
      if(p.priceOld){
        document.getElementById('pdPriceOld').textContent = p.priceOld;
        document.getElementById('pdPriceOld').style.display='inline';
      } else {
        document.getElementById('pdPriceOld').style.display='none';
      }
      if(p.discount){
        document.getElementById('pdDiscount').textContent = p.discount;
        document.getElementById('pdDiscount').style.display='inline-block';
      } else {
        document.getElementById('pdDiscount').style.display='none';
      }

      // badge
      var badge = document.getElementById('pdBadge');
      if(p.badge==='ban-chay'){badge.textContent='BÁN CHẠY';badge.style.display='block';}
      else if(p.badge==='moi'){badge.textContent='MỚI';badge.style.display='block';}
      else{badge.style.display='none';}

      // thumbs - same image 4 times as placeholder
      var thumbsEl = document.getElementById('pdThumbs');
      thumbsEl.innerHTML = [1,2,3,4,5].map(function(i){
        return '<div class="pd-thumb'+(i===1?' active':'')+'"><img src="'+p.image+'" alt="" onerror="this.src=\'assets/images/categories/phu-kien.png\'"></div>';
      }).join('');
      thumbsEl.querySelectorAll('.pd-thumb').forEach(function(th,i){
        th.addEventListener('click', function(){
          thumbsEl.querySelectorAll('.pd-thumb').forEach(function(t){t.classList.remove('active');});
          th.classList.add('active');
        });
      });

      // features
      document.getElementById('pdFeatures').innerHTML = (p.features||[]).map(function(f){
        return '<div class="pd-feature"><i class="bi '+f.icon+'"></i><span class="ft-main">'+f.main+'</span><span class="ft-sub">'+f.sub+'</span></div>';
      }).join('');

      // specs tab
      document.getElementById('pdSpecsTable').innerHTML = (p.specs||[]).map(function(s){
        return '<tr><td>'+s[0]+'</td><td>'+s[1]+'</td></tr>';
      }).join('');
      document.getElementById('pdFullSpecs').innerHTML = document.getElementById('pdSpecsTable').innerHTML;

      // advantages
      document.getElementById('pdAdvList').innerHTML = (p.adv||[]).map(function(a){
        return '<li><i class="bi bi-check-circle-fill"></i><span>'+a+'</span></li>';
      }).join('');

      // ngan lọc
      var nganEl = document.getElementById('pdNganGrid');
      if(p.ngan && p.ngan.length){
        nganEl.innerHTML = p.ngan.map(function(n){
          return '<div class="pd-ngan-item"><div class="pd-ngan-num">'+n.num+'</div><div><h6>'+n.name+'</h6><p>'+n.desc+'</p></div></div>';
        }).join('');
      } else {
        nganEl.innerHTML = '<p style="color:var(--color-text-muted);font-size:0.85rem;">Xem thêm thông tin chi tiết tại cửa hàng.</p>';
      }

      // ho types
      var hoEl = document.getElementById('pdHoTypes');
      if(p.hoTypes && p.hoTypes.length){
        hoEl.innerHTML = p.hoTypes.map(function(h){
          return '<div class="pd-ho-type"><i class="bi '+h.icon+'"></i><span>'+h.name+'</span><small>'+h.size+'</small></div>';
        }).join('');
      } else {
        hoEl.innerHTML = '';
      }

      // reviews
      var revEl = document.getElementById('pdReviewsList');
      if(p.reviews && p.reviews.length && typeof p.reviews[0] === 'object'){
        revEl.innerHTML = p.reviews.map(function(r){
          return '<div class="col-md-4"><div style="background:white;border-radius:12px;padding:18px;box-shadow:0 2px 10px rgba(10,37,64,0.07);">' +
            '<div style="color:#fbbf24;margin-bottom:8px;">★★★★★</div>' +
            '<p style="font-size:0.83rem;color:#3a5568;font-style:italic;margin-bottom:12px;">"'+r.text+'"</p>' +
            '<div style="display:flex;align-items:center;gap:8px;">' +
              '<div style="width:36px;height:36px;border-radius:50%;background:#daeef8;display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--color-primary);">'+r.name.charAt(0)+'</div>' +
              '<div><div style="font-weight:600;font-size:0.83rem;">'+r.name+'</div><div style="font-size:0.72rem;color:#64748b;">'+r.loc+'</div></div>' +
            '</div></div></div>';
        }).join('');
      } else {
        revEl.innerHTML = '<div class="col-12"><p style="color:var(--color-text-muted);font-size:0.88rem;">Chưa có đánh giá. Hãy là người đầu tiên đánh giá sản phẩm này!</p></div>';
      }

      // buy button
      document.getElementById('pdBuyBtn').onclick = function(){
        openBuyModal(p.id);
      };
      document.getElementById('pdCartBtn').onclick = function(){
        addToCart(p.id);
      };

      // reset tabs
      document.querySelectorAll('.pd-tab').forEach(function(t){t.classList.remove('active');});
      document.querySelectorAll('.pd-tab-panel').forEach(function(t){t.classList.remove('active');});
      document.querySelector('.pd-tab[data-tab="tong-quan"]').classList.add('active');
      document.getElementById('tab-tong-quan').classList.add('active');

      document.getElementById('qtyInput').value = 1;
      window.scrollTo({top: 100, behavior:'smooth'});
    };

    window.goBack = function(){
      document.getElementById('productListView').style.display='block';
      document.getElementById('productDetailView').style.display='none';
      window.scrollTo({top:0,behavior:'smooth'});
    };

    
    var cartItems = [];
    var currentBuyProduct = null;
    var customerRules = {
      name: /^[\p{L}\p{M}\s'.-]{2,60}$/u,
      phone: /^(0|\+84)\d{9,10}$/,
      email: /^[A-Za-z0-9._%+-]+@gmail\.com$/i,
      address: /^[^<>]{8,160}$/
    };

    function money(n){
      return n.toLocaleString('vi-VN') + 'đ';
    }

    function getSignedInProfile(){
      return window.AquaCare && window.AquaCare.account && typeof window.AquaCare.account.getSignedInProfile === 'function'
        ? window.AquaCare.account.getSignedInProfile()
        : null;
    }

    function isSignedIn(){
      return !!getSignedInProfile();
    }

    function getDisplayName(profile){
      if(!profile) return 'khách hàng';
      return (profile.name || profile.email || 'khách hàng').trim();
    }

    function prefillCustomerForm(prefix){
      var profile = getSignedInProfile();
      if(!profile) return;
      var nameInput = document.getElementById(prefix + 'CustomerName');
      var emailInput = document.getElementById(prefix + 'CustomerEmail');
      if(nameInput){
        nameInput.value = profile.name || '';
        setFieldState(nameInput, true);
      }
      if(emailInput){
        emailInput.value = profile.email || '';
        setFieldState(emailInput, true);
      }
    }

    function getResolvedCartItems(){
      if(window.AquaCare && window.AquaCare.cart && typeof window.AquaCare.cart.get === 'function'){
        return window.AquaCare.cart.get();
      }
      return cartItems;
    }

    function findProductByCartItem(item){
      if(!item) return null;
      var id = item.id == null ? '' : String(item.id);
      return products.find(function(product){ return String(product.id) === id; })
        || products.find(function(product){ return product.name === item.name; })
        || null;
    }

    function ensureSignedInForCheckout(){
      if(isSignedIn()) return true;
      var cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      var buyModal = bootstrap.Modal.getInstance(document.getElementById('buyModal'));
      if(cartModal) cartModal.hide();
      if(buyModal) buyModal.hide();
      if(window.AquaCare && typeof window.AquaCare.openAccount === 'function'){
        window.AquaCare.openAccount('login');
      }
      toast('Vui lòng đăng nhập trước khi thanh toán.');
      return false;
    }

    function updateCartBadge(){
      var count = getResolvedCartItems().reduce(function(sum,item){return sum + Number(item.qty || 0);}, 0);
      document.getElementById('cartBadge').textContent = count;
    }

    function setFieldState(input, ok){
      input.style.borderColor = ok ? '#d0e8f5' : '#d32f2f';
      input.style.background = ok ? 'white' : '#fff7f7';
    }

    var tempPayCode = '';
    function generatePayCode() {
      if (!tempPayCode) {
        tempPayCode = 'AQ-' + Math.floor(10000 + Math.random() * 90000);
      }
      return tempPayCode;
    }

    window.togglePayDetails = function(prefix, method){
      var container = document.getElementById(prefix + 'PayDetails');
      if(!container) return;
      
      if(method === 'cod'){
        container.style.display = 'none';
        container.innerHTML = '';
        return;
      }
      
      var payCode = generatePayCode();
      container.style.display = 'block';
      
      if(method === 'vietqr'){
        container.innerHTML = 
          '<div style="background:#f4fbff;border:1.5px dashed #1a9dd0;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;">' +
            '<div style="width:76px;height:76px;background:white;border-radius:8px;border:1px solid #d0e8f5;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;">' +
              '<i class="bi bi-qr-code" style="font-size:3.2rem;color:#0a2540;"></i>' +
            '</div>' +
            '<div style="font-size:0.73rem;color:var(--color-text-dark);line-height:1.45;">' +
              '<strong style="color:#1a9dd0;display:block;margin-bottom:2px;font-size:0.78rem;">QUÉT MÃ VIETQR ĐỂ CHUYỂN KHOẢN KHỨ HỒI</strong>' +
              '<strong>Ngân hàng:</strong> MB Bank (Quân Đội)<br>' +
              '<strong>Chủ TK:</strong> CÔNG TY AQUA CARE VIỆT NAM<br>' +
              '<strong>STK:</strong> 1902 0625 8888<br>' +
              '<strong>Nội dung:</strong> <span style="font-family:monospace;background:#e1f5fe;padding:2px 6px;border-radius:4px;color:#0b76a6;font-weight:700;">' + payCode + '</span>' +
            '</div>' +
          '</div>';
      } else if(method === 'momo'){
        container.innerHTML = 
          '<div style="background:#fcf2f7;border:1.5px dashed #a30062;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;">' +
            '<div style="width:76px;height:76px;background:white;border-radius:8px;border:1px solid #f7d4e5;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
              '<i class="bi bi-qr-code" style="font-size:3.2rem;color:#a30062;"></i>' +
            '</div>' +
            '<div style="font-size:0.73rem;color:var(--color-text-dark);line-height:1.45;">' +
              '<strong style="color:#a30062;display:block;margin-bottom:2px;font-size:0.78rem;">QUÉT MÃ VÍ MOMO ĐỂ THANH TOÁN</strong>' +
              '<strong>Tên ví:</strong> Aqua Care Việt Nam<br>' +
              '<strong>Số điện thoại:</strong> 0946 887 332<br>' +
              '<strong>Nội dung:</strong> <span style="font-family:monospace;background:#fce4ec;padding:2px 6px;border-radius:4px;color:#c2185b;font-weight:700;">' + payCode + '</span>' +
            '</div>' +
          '</div>';
      } else if(method === 'visa'){
        container.innerHTML = 
          '<div style="background:#fffaf4;border:1.5px solid #f57c00;border-radius:12px;padding:12px;">' +
            '<div style="font-weight:700;font-size:0.76rem;color:#e65100;margin-bottom:6px;display:flex;align-items:center;gap:6px;"><i class="bi bi-shield-lock-fill"></i> CỔNG THANH TOÁN VISA/MASTER</div>' +
            '<div style="display:grid;grid-template-columns:1fr;gap:6px;">' +
              '<input type="text" placeholder="Số thẻ (16 chữ số)" maxlength="19" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\').replace(/(.{4})/g, \'$1 \').trim()">' +
              '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">' +
                '<input type="text" placeholder="MM/YY" maxlength="5" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\').replace(/(\\d{2})(\\d{2})/, \'$1/$2\')">' +
                '<input type="password" placeholder="CVV (3 số)" maxlength="3" style="width:100%;border:1px solid #ffd180;border-radius:6px;padding:5px 8px;font-size:0.75rem;outline:none;" oninput="this.value = this.value.replace(/\\D/g, \'\')">' +
              '</div>' +
            '</div>' +
          '</div>';
      }
    };

    function validateCustomerForm(prefix){
      var fields = {
        name: document.getElementById(prefix+'CustomerName'),
        phone: document.getElementById(prefix+'CustomerPhone'),
        email: document.getElementById(prefix+'CustomerEmail'),
        address: document.getElementById(prefix+'CustomerAddress')
      };
      var errorEl = document.getElementById(prefix+'FormError');
      var messages = [];
      Object.keys(fields).forEach(function(key){
        var input = fields[key];
        var value = (input.value || '').trim();
        if(key === 'phone') value = value.replace(/[\s.-]/g, '');
        if(key === 'email') value = value.toLowerCase();
        var ok = customerRules[key].test(value);
        setFieldState(input, ok);
        if(ok) input.value = value;
        if(!ok){
          if(key==='name') messages.push('Họ tên phải từ 2-60 ký tự và không chứa ký tự đặc biệt lạ.');
          if(key==='phone') messages.push('Số điện thoại phải bắt đầu bằng 0 hoặc +84 và có 10-11 chữ số.');
          if(key==='email') messages.push('Email cần đúng định dạng @gmail.com.');
          if(key==='address') messages.push('Địa chỉ phải có ít nhất 8 ký tự.');
        }
      });
      if(messages.length){
        errorEl.textContent = messages[0];
        errorEl.style.display = 'block';
        return null;
      }
      errorEl.style.display = 'none';
      return {
        name: fields.name.value.trim(),
        phone: fields.phone.value.trim(),
        email: fields.email.value.trim(),
        address: fields.address.value.trim()
      };
    }

    function addCartItem(product, qty){
      qty = Math.max(1, Math.min(99, parseInt(qty)||1));
      if(window.AquaCare && window.AquaCare.cart){
        var added = window.AquaCare.cart.add(product, qty, {silent:true});
        if(added){
          updateCartBadge();
          renderCart();
        }
        return added;
      }
      var existing = cartItems.find(function(item){return item.id===product.id;});
      if(existing) existing.qty = Math.min(99, existing.qty + qty);
      else cartItems.push({id:product.id, qty:qty});
      updateCartBadge();
      return true;
    }

    window.addToCart = function(id, qty){
      var p = products.find(function(x){return x.id===id;});
      if(!p) return;
      var added = addCartItem(p, qty || parseInt(document.getElementById('qtyInput') && document.getElementById('qtyInput').value) || 1);
      if(!added) return;
      toast('✓ Đã thêm vào giỏ: ' + p.name);
    };

    window.removeCartItem = function(idOrKey){
      if(window.AquaCare && window.AquaCare.cart){
        var key = String(idOrKey);
        var sharedMatch = getResolvedCartItems().find(function(item){
          return item.key === key || String(item.id || '') === key;
        });
        window.AquaCare.cart.remove(sharedMatch ? sharedMatch.key : key);
        updateCartBadge();
        renderCart();
        return;
      }
      cartItems = cartItems.filter(function(item){return String(item.id)!==String(idOrKey);});
      updateCartBadge();
      renderCart();
    };

    function renderCart(){
      var itemsEl = document.getElementById('cartItems');
      var emptyEl = document.getElementById('cartEmpty');
      var checkoutEl = document.getElementById('cartCheckout');
      var resolvedItems = getResolvedCartItems();
      prefillCustomerForm('cart');
      if(!resolvedItems.length){
        itemsEl.innerHTML = '';
        emptyEl.style.display = 'block';
        checkoutEl.style.display = 'none';
        document.getElementById('cartTotal').textContent = money(0);
        return;
      }
      emptyEl.style.display = 'none';
      checkoutEl.style.display = 'block';
      var total = 0;
      itemsEl.innerHTML = resolvedItems.map(function(item){
        var matchedProduct = findProductByCartItem(item);
        var p = matchedProduct || {
          id: item.id,
          name: item.name || 'Sản phẩm Aqua Care',
          image: item.image || 'assets/images/categories/phu-kien.png',
          priceRaw: Number(item.priceRaw || 0),
          price: item.price || money(item.priceRaw || 0)
        };
        total += p.priceRaw * item.qty;
        return '<div style="display:grid;grid-template-columns:72px 1fr auto;gap:12px;align-items:center;border:1px solid #e8f4fc;border-radius:12px;padding:10px;">' +
          '<img src="'+p.image+'" alt="'+p.name+'" style="width:72px;height:60px;object-fit:cover;border-radius:10px;background:#eaf6fc;" onerror="this.src=&quot;assets/images/categories/phu-kien.png&quot;">' +
          '<div><div style="font-weight:700;color:var(--color-text-dark);font-size:0.9rem;">'+p.name+'</div><div style="font-size:0.78rem;color:var(--color-text-muted);">'+p.price+' × '+item.qty+'</div></div>' +
          '<div style="text-align:right;"><strong style="color:var(--color-primary-dark);">'+money(p.priceRaw * item.qty)+'</strong><button onclick="removeCartItem(\''+(item.key || p.id)+'\')" style="display:block;margin-top:6px;border:none;background:none;color:#d32f2f;font-size:0.76rem;">Xóa</button></div>' +
        '</div>';
      }).join('');
      document.getElementById('cartTotal').textContent = money(total);
    }

    window.openCart = function(){
      if(!isSignedIn()){
        if(window.AquaCare && typeof window.AquaCare.openAccount === 'function'){
          window.AquaCare.openAccount('login');
        }
        toast('Vui lòng đăng nhập để mở giỏ hàng.');
        return;
      }
      tempPayCode = '';
      var det = document.getElementById('cartPayDetails');
      if (det) { det.style.display = 'none'; det.innerHTML = ''; }
      var codRadio = document.querySelector('input[name="cartPayMethod"][value="cod"]');
      if (codRadio) codRadio.checked = true;

      renderCart();
      new bootstrap.Modal(document.getElementById('cartModal')).show();
    };

    window.checkoutCart = function(){
      var resolvedItems = getResolvedCartItems();
      if(!resolvedItems.length) return;
      if(!ensureSignedInForCheckout()) return;
      prefillCustomerForm('cart');
      var customer = validateCustomerForm('cart');
      if(!customer) return;
      if(window.AquaCare && window.AquaCare.cart){
        window.AquaCare.cart.clear();
      }
      cartItems = [];
      updateCartBadge();
      renderCart();
      var cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
      if(cartModal) cartModal.hide();
      
      var payMethod = 'cod';
      var checkedRadio = document.querySelector('input[name="cartPayMethod"]:checked');
      if (checkedRadio) payMethod = checkedRadio.value;
      
      showOrderStatusModal(customer.name, payMethod, generatePayCode());
      ['Name','Phone','Email','Address'].forEach(function(name){
        var input = document.getElementById('cartCustomer'+name);
        if(input){ input.value=''; setFieldState(input, true); }
      });
      document.getElementById('cartNoteInput').value = '';
      document.getElementById('cartFormError').style.display = 'none';
    };

    
    window.openBuyModal = function(id){
      if(!isSignedIn()){
        if(window.AquaCare && typeof window.AquaCare.openAccount === 'function'){
          window.AquaCare.openAccount('login');
        }
        toast('Vui lòng đăng nhập để mua hàng!');
        return;
      }
      var p = products.find(function(x){return x.id===id;});
      if(!p) return;
      currentBuyProduct = p;

      document.getElementById('buyModalName').textContent = p.name;
      var img = document.getElementById('buyModalImg');
      img.src = p.image;
      img.alt = p.name;
      img.onerror = function(){this.src='assets/images/categories/phu-kien.png';};
      document.getElementById('buyModalPrice').textContent = p.price;

      var oldEl = document.getElementById('buyModalPriceOld');
      if(p.priceOld){oldEl.textContent=p.priceOld;oldEl.style.display='inline';}
      else{oldEl.style.display='none';}

      var discEl = document.getElementById('buyModalDiscount');
      if(p.discount){discEl.textContent=p.discount;discEl.style.display='inline-block';}
      else{discEl.style.display='none';}

      var badge = document.getElementById('buyModalBadge');
      if(p.badge){badge.className='product-badge '+p.badge;badge.textContent=p.badgeText;badge.style.display='inline-block';}
      else{badge.style.display='none';}

      // Feature highlights
      document.getElementById('buyModalFeatures').innerHTML = (p.features||[]).map(function(f){
        return '<div style="background:#f0f8fc;border-radius:10px;padding:10px;display:flex;align-items:center;gap:8px;">' +
          '<i class="bi '+f.icon+'" style="color:var(--color-primary);font-size:1.1rem;flex-shrink:0;"></i>' +
          '<div><div style="font-size:0.78rem;font-weight:700;color:var(--color-text-dark);">'+f.main+'</div>' +
          '<div style="font-size:0.7rem;color:var(--color-text-muted);">'+f.sub+'</div></div>' +
        '</div>';
      }).join('');

      // Specs table
      document.getElementById('buyModalSpecs').innerHTML = (p.specs||[]).slice(0,6).map(function(s){
        return '<tr style="border-bottom:1px solid #e8f4fc;">' +
          '<td style="padding:7px 8px;font-size:0.78rem;color:var(--color-text-muted);width:45%;">'+s[0]+'</td>' +
          '<td style="padding:7px 8px;font-size:0.78rem;font-weight:600;color:var(--color-text-dark);">'+s[1]+'</td>' +
        '</tr>';
      }).join('');

      tempPayCode = '';
      var det = document.getElementById('buyPayDetails');
      if (det) { det.style.display = 'none'; det.innerHTML = ''; }
      var codRadio = document.querySelector('input[name="buyPayMethod"][value="cod"]');
      if (codRadio) codRadio.checked = true;

      document.getElementById('buyQtyInput').value = 1;
      document.getElementById('buyNoteInput').value = '';
      ['Name','Phone','Email','Address'].forEach(function(name){
        var input = document.getElementById('buyCustomer'+name);
        if(input){ input.value=''; setFieldState(input, true); }
      });
      prefillCustomerForm('buy');
      document.getElementById('buyFormError').style.display = 'none';
      updateBuyTotal();

      new bootstrap.Modal(document.getElementById('buyModal')).show();
    };

    function updateBuyTotal(){
      var p = currentBuyProduct;
      if(!p) return;
      var qty = parseInt(document.getElementById('buyQtyInput').value)||1;
      var totalRaw = p.priceRaw * qty;
      var totalFmt = totalRaw.toLocaleString('vi-VN') + 'đ';
      document.getElementById('buyModalTotal').textContent = 'Tổng: ' + totalFmt;
    }

    window.changeBuyQty = function(d){
      var inp = document.getElementById('buyQtyInput');
      var v = parseInt(inp.value)||1;
      inp.value = Math.max(1, Math.min(99, v+d));
      updateBuyTotal();
    };
    document.addEventListener('input', function(e){
      if(e.target && e.target.id==='buyQtyInput') updateBuyTotal();
    });

    window.confirmBuyNow = function(){
      if(!currentBuyProduct) return;
      if(!ensureSignedInForCheckout()) return;
      prefillCustomerForm('buy');
      var customer = validateCustomerForm('buy');
      if(!customer) return;
      var qty = parseInt(document.getElementById('buyQtyInput').value)||1;
      var buyModal = bootstrap.Modal.getInstance(document.getElementById('buyModal'));
      if(buyModal) buyModal.hide();
      
      var payMethod = 'cod';
      var checkedRadio = document.querySelector('input[name="buyPayMethod"]:checked');
      if (checkedRadio) payMethod = checkedRadio.value;
      
      showOrderStatusModal(customer.name, payMethod, generatePayCode());
    };

    var currentSimulationInterval = null;
    var currentSimulationTimeout = null;
    var simulationActive = false;
    var savedOrderData = {};

    function getPayMethodLabel(method) {
      if (method === 'cod') return 'COD (Tiền mặt)';
      if (method === 'vietqr') return 'Chuyển khoản VietQR';
      if (method === 'momo') return 'Ví MoMo QR';
      if (method === 'visa') return 'Thẻ Visa/Master';
      return 'COD (Tiền mặt)';
    }

    function getAnimHTML(step) {
      if (step === 1) {
        return '<div class="receipt-container">' +
                 '<div class="receipt-line" style="width: 80%;"></div>' +
                 '<div class="receipt-line" style="width: 60%;"></div>' +
                 '<div class="receipt-line" style="width: 90%;"></div>' +
                 '<div class="receipt-line" style="width: 50%;"></div>' +
                 '<div class="receipt-scan-bar"></div>' +
               '</div>' +
               '<div style="margin-left: 20px; font-weight: 700; color: #0a2540; font-size: 0.88rem;">Hệ thống đang kiểm tra đơn hàng...</div>';
      }
      if (step === 2) {
        return '<div class="box-anim-wrap">' +
                 '<div class="box-container">' +
                   '<div class="box-lid-left"></div>' +
                   '<div class="box-lid-right"></div>' +
                 '</div>' +
                 '<div class="box-floor-shadow"></div>' +
               '</div>' +
               '<div style="margin-left: 20px; font-weight: 700; color: #8d6e63; font-size: 0.88rem;">Đang đóng gói sản phẩm...</div>';
      }
      if (step === 3) {
        return '<div class="shipper-container">' +
                 '<div class="road-scenery">' +
                   '<div class="road-element" style="animation-delay: 0s;"></div>' +
                   '<div class="road-element" style="animation-delay: 0.25s; left: 40%;"></div>' +
                   '<div class="road-element" style="animation-delay: 0.5s; left: 80%;"></div>' +
                 '</div>' +
                 '<div class="road-cloud" style="animation-delay: 0s; top: 10px; font-size: 1.2rem;"><i class="bi bi-cloud-fill"></i></div>' +
                 '<div class="road-cloud" style="animation-delay: 1.8s; top: 30px; font-size: 1rem;"><i class="bi bi-cloud-fill"></i></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 0s;"></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 0.5s;"></div>' +
                 '<div class="exhaust-smoke" style="animation-delay: 1.0s;"></div>' +
                 '<div class="scooter-body">' +
                   '<svg class="scooter-svg" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" style="width:75px;height:55px;">' +
                     '<g class="spinning-wheel-front">' +
                       '<circle cx="28" cy="58" r="9" fill="#37474f" stroke="#eceff1" stroke-width="2"/>' +
                       '<line x1="28" y1="49" x2="28" y2="67" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<line x1="19" y1="58" x2="37" y2="58" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<circle cx="28" cy="58" r="3" fill="#cfd8dc"/>' +
                     '</g>' +
                     '<g class="spinning-wheel-rear">' +
                       '<circle cx="72" cy="58" r="9" fill="#37474f" stroke="#eceff1" stroke-width="2"/>' +
                       '<line x1="72" y1="49" x2="72" y2="67" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<line x1="63" y1="58" x2="81" y2="58" stroke="#eceff1" stroke-width="1.5"/>' +
                       '<circle cx="72" cy="58" r="3" fill="#cfd8dc"/>' +
                     '</g>' +
                     '<path d="M28 58 L48 58 L58 38 L72 58" stroke="#1a9dd0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
                     '<rect x="16" y="22" width="22" height="22" rx="2" fill="#ff9100"/>' +
                     '<text x="27" y="36" font-family="sans-serif" font-size="10" font-weight="bold" fill="white" text-anchor="middle">AQ</text>' +
                     '<path d="M58 38 L66 16 L62 13" stroke="#37474f" stroke-width="3" stroke-linecap="round" fill="none"/>' +
                     '<path d="M58 38 L68 38 L64 20" stroke="#1a9dd0" stroke-width="3" stroke-linecap="round" fill="none"/>' +
                     '<circle cx="48" cy="18" r="7" fill="#37474f"/>' +
                     '<path d="M48 25 L48 38 L38 41" stroke="#37474f" stroke-width="4" stroke-linecap="round" fill="none"/>' +
                   '</svg>' +
                 '</div>' +
                 '<div style="margin-left: 20px; font-weight: 700; color: #1a9dd0; font-size: 0.88rem; z-index: 10;">Shipper đang giao hàng...</div>' +
               '</div>';
      }
      if (step === 4) {
        return '<div class="delivered-success-icon"><i class="bi bi-check-circle-fill"></i></div>' +
               '<div style="margin-left: 15px; font-weight: 700; color: #2e7d32; font-size: 0.88rem; z-index: 10;">Giao hàng thành công!</div>' +
               '<div class="confetti-particle" style="background:#ffeb3b;left:10%;animation-delay:0s;animation-duration:2.5s;--drift:40px;"></div>' +
               '<div class="confetti-particle" style="background:#e91e63;left:25%;animation-delay:0.3s;animation-duration:1.8s;--drift:-35px;"></div>' +
               '<div class="confetti-particle" style="background:#2196f3;left:45%;animation-delay:0.1s;animation-duration:2.2s;--drift:25px;"></div>' +
               '<div class="confetti-particle" style="background:#4caf50;left:65%;animation-delay:0.5s;animation-duration:2.4s;--drift:-45px;"></div>' +
               '<div class="confetti-particle" style="background:#ff9800;left:85%;animation-delay:0.2s;animation-duration:1.5s;--drift:35px;"></div>';
      }
      return '';
    }

    function updateStepUI(activeStep) {
      var line = document.getElementById('osProgressLine');
      if (line) {
        var pct = ((activeStep - 1) / 3) * 100;
        line.style.width = pct + '%';
      }

      for (var i = 1; i <= 4; i++) {
        var node = document.getElementById('stepNode' + i);
        if (!node) continue;
        node.classList.remove('active', 'completed');
        if (i < activeStep) {
          node.classList.add('completed');
        } else if (i === activeStep) {
          node.classList.add('active');
        }
      }

      var animContainer = document.getElementById('osAnimContainer');
      if (animContainer) {
        animContainer.innerHTML = getAnimHTML(activeStep);
      }

      var badge = document.getElementById('osCurrentStatusBadge');
      if (badge) {
        if (activeStep === 1) {
          badge.textContent = 'Đã tiếp nhận';
          badge.style.background = '#1a9dd0';
        } else if (activeStep === 2) {
          badge.textContent = 'Đóng gói';
          badge.style.background = '#8d6e63';
        } else if (activeStep === 3) {
          badge.textContent = 'Đang giao hàng';
          badge.style.background = '#ff9100';
        } else if (activeStep === 4) {
          badge.textContent = 'Đã giao';
          badge.style.background = '#2e7d32';
        }
      }
    }

    function addLogToUI(status, time, desc, isFirst) {
      var logList = document.getElementById('osHistoryLog');
      if (!logList) return;
      
      var row = document.createElement('div');
      row.style.display = 'flex';
      row.style.gap = '10px';
      row.style.fontSize = '0.78rem';
      row.style.lineHeight = '1.45';
      if (isFirst) {
        row.style.fontWeight = '700';
        row.style.color = '#1a2a3a';
      } else {
        row.style.color = '#78909c';
      }

      row.innerHTML = 
        '<span style="color:#1a9dd0;font-weight:700;white-space:nowrap;width:60px;">' + time + '</span>' +
        '<div style="flex:1;">' +
          '<strong>[' + status + ']</strong> ' + desc +
        '</div>';
      
      logList.insertBefore(row, logList.firstChild);
    }

    function showOrderStatusModal(customerName, payMethod, orderId) {
      if (currentSimulationInterval) clearInterval(currentSimulationInterval);
      if (currentSimulationTimeout) clearTimeout(currentSimulationTimeout);
      simulationActive = false;

      var simBtn = document.getElementById('osSimulateBtn');
      if (simBtn) {
        simBtn.disabled = false;
        simBtn.innerHTML = '<i class="bi bi-play-circle-fill me-1"></i>Mô phỏng hành trình';
      }
      
      var closeBtn = document.getElementById('osCloseBtn');
      if (closeBtn) closeBtn.disabled = false;
      var finishBtn = document.getElementById('osFinishBtn');
      if (finishBtn) finishBtn.disabled = false;

      savedOrderData = {
        name: customerName,
        payMethod: payMethod,
        orderId: orderId
      };

      document.getElementById('osOrderId').textContent = orderId;
      document.getElementById('osPayMethodText').textContent = getPayMethodLabel(payMethod);

      var logList = document.getElementById('osHistoryLog');
      if (logList) logList.innerHTML = '';

      updateStepUI(1);

      var now = new Date();
      var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
      
      var payDesc = 'Hệ thống đã ghi nhận đơn hàng và đang tiến hành xử lý.';
      if (payMethod === 'vietqr' || payMethod === 'momo') {
        payDesc = 'Giao dịch qua ' + getPayMethodLabel(payMethod) + ' đang được kiểm tra trên sao kê ngân hàng.';
      } else if (payMethod === 'visa') {
        payDesc = 'Thanh toán trực tuyến Visa/Master thành công. Chờ xử lý đơn hàng.';
      }
      
      addLogToUI('Tiếp nhận', timeStr, payDesc, true);

      var osModal = new bootstrap.Modal(document.getElementById('orderStatusModal'));
      osModal.show();
    }

    window.startOrderSimulation = function() {
      if (simulationActive) return;
      simulationActive = true;

      var simBtn = document.getElementById('osSimulateBtn');
      if (simBtn) {
        simBtn.disabled = true;
        simBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Đang đóng gói...';
      }
      
      var closeBtn = document.getElementById('osCloseBtn');
      if (closeBtn) closeBtn.disabled = true;
      var finishBtn = document.getElementById('osFinishBtn');
      if (finishBtn) finishBtn.disabled = true;

      var currentStep = 1;
      
      function nextStep() {
        currentStep++;
        if (currentStep === 2) {
          updateStepUI(2);
          if (simBtn) simBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Đang giao hàng...';
          var now = new Date();
          var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
          addLogToUI('Đóng gói', timeStr, 'Sản phẩm đã được kiểm nghiệm chất lượng và đóng thùng niêm phong.', true);
          
          currentSimulationTimeout = setTimeout(nextStep, 3500);
        } else if (currentStep === 3) {
          updateStepUI(3);
          if (simBtn) simBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>Đang đến nơi...';
          var now = new Date();
          var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
          addLogToUI('Vận chuyển', timeStr, 'Đã chuyển giao cho Aqua Express. Shipper đang trên đường đi giao hàng.', true);
          
          currentSimulationTimeout = setTimeout(nextStep, 4000);
        } else if (currentStep === 4) {
          updateStepUI(4);
          if (simBtn) {
            simBtn.disabled = false;
            simBtn.innerHTML = '<i class="bi bi-arrow-clockwise me-1"></i>Mô phỏng lại';
          }
          if (closeBtn) closeBtn.disabled = false;
          if (finishBtn) finishBtn.disabled = false;
          simulationActive = false;

          var now = new Date();
          var timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
          addLogToUI('Đã giao', timeStr, 'Giao hàng thành công. Khách hàng ' + savedOrderData.name + ' đã nhận hàng và kiểm tra trọn vẹn.', true);
          
          toast('✓ Đơn hàng ' + savedOrderData.orderId + ' đã được giao thành công!');
        }
      }

      currentSimulationTimeout = setTimeout(nextStep, 3000);
    };

    window.confirmAddCart = function(){
      if(!isSignedIn()){
        if(window.AquaCare && typeof window.AquaCare.openAccount === 'function'){
          window.AquaCare.openAccount('login');
        }
        toast('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
        return;
      }
      if(!currentBuyProduct) return;
      var qty = parseInt(document.getElementById('buyQtyInput').value)||1;
      var added = addCartItem(currentBuyProduct, qty);
      if(!added) return;
      bootstrap.Modal.getInstance(document.getElementById('buyModal')).hide();
      toast('✓ Đã thêm ' + qty + ' sản phẩm vào giỏ: ' + currentBuyProduct.name);
    };

    var cartBtn = document.getElementById('cartBtn');
    if(cartBtn) cartBtn.addEventListener('click', openCart);
    window.addEventListener('aqua:cart-updated', function(){
      updateCartBadge();
      renderCart();
    });

    
    window.changeQty = function(d){
      var inp = document.getElementById('qtyInput');
      var v = parseInt(inp.value)||1;
      inp.value = Math.max(1, Math.min(99, v+d));
    };

    
    document.querySelectorAll('.pd-tab').forEach(function(tab){
      tab.addEventListener('click', function(){
        var t = tab.getAttribute('data-tab');
        document.querySelectorAll('.pd-tab').forEach(function(x){x.classList.remove('active');});
        document.querySelectorAll('.pd-tab-panel').forEach(function(x){x.classList.remove('active');});
        tab.classList.add('active');
        document.getElementById('tab-'+t).classList.add('active');
      });
    });

    
    document.getElementById('searchInput').addEventListener('input', renderProductGrid);

    // Bind events for quick filters
    ['filter-best-seller', 'filter-new-arrival', 'filter-on-sale', 'filter-high-rating'].forEach(function(id){
      var cb = document.getElementById(id);
      if(cb) cb.addEventListener('change', renderProductGrid);
    });

    
    document.getElementById('sortSelect').addEventListener('change', function(){
      renderProductGrid();
    });

    window.syncFilter = function(mCb, dId) {
      var dCb = document.getElementById(dId);
      if (dCb) {
        dCb.checked = mCb.checked;
        renderProductGrid();
      }
    };

    
    var urlParams = new URLSearchParams(window.location.search);
    var urlCat = urlParams.get('category');
    var urlSearch = urlParams.get('search');
    if(urlSearch){
      document.getElementById('searchInput').value = urlSearch;
      currentCat = 'all';
      renderProductGrid();
      document.getElementById('spLayout').scrollIntoView({behavior:'smooth', block:'start'});
    } else if(urlCat) filterCat(urlCat); else renderProductGrid();

    
    var navbar = document.getElementById('mainNav');
    var backTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function(){
      navbar.classList.toggle('scrolled', window.scrollY>40);
      if(backTop) backTop.classList.toggle('visible', window.scrollY>480);
    },{passive:true});
    if(backTop) backTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});




// Cấu hình widget Chat hỗ trợ trực tuyến
    var isOpen = false;
    var replies = {
      'tư vấn sản phẩm': '🤖 <strong>[AI Nemo]</strong>: Aqua Care cung cấp giải pháp lọc nước, cám dinh dưỡng cá Koi, cây thủy sinh và các chế phẩm vi sinh chất lượng cao. Bạn có thể chọn danh mục sản phẩm ở cột bên trái để Nemo lọc nhanh giúp bạn nhé! 😊',
      'hỏi về giá': '🤖 <strong>[AI Nemo]</strong>: Tất cả giá niêm yết đều là giá tốt nhất đã được chiết khấu. Nếu bạn muốn nhận báo giá sỉ cho công trình hoặc đại lý, hãy nhập SĐT của bạn kèm lời nhắn tại đây, Nemo sẽ gửi ngay cho bộ phận kinh doanh!',
      'cách đặt hàng': '🤖 <strong>[AI Nemo]</strong>: Đặt hàng cực kỳ dễ dàng! Bạn chỉ cần nhấn nút "Mua ngay" trên sản phẩm yêu thích, nhập địa chỉ nhận hàng, chọn 1 trong 4 phương thức thanh toán (VietQR/MoMo/Visa/COD) và xác nhận. Đơn hàng sẽ được xử lý ngay lập tức! 📦',
      'chăm sóc hồ cá': '🤖 <strong>[AI Nemo]</strong>: Bạn có thể tham khảo chuyên mục cẩm nang của Nemo tại <a href="kien-thuc.html" style="color:#1a9dd0;font-weight:700;">Trang kiến thức cá cảnh</a> để xem hướng dẫn chi tiết cách lọc nước, ngừa nấm và điều chỉnh pH.',
      'default': '🤖 <strong>[AI Nemo]</strong>: Cảm ơn bạn! Nemo đã tiếp nhận câu hỏi của bạn. Hệ thống AI đang phân tích dữ liệu. Bạn có muốn tham khảo thêm thông tin liên hệ trực tiếp tại <a href="lien-he.html" style="color:#1a9dd0;font-weight:700;">Trang liên hệ</a> không?'
    };

    window.toggleChat = function(){
      isOpen = !isOpen;
      var box = document.getElementById('chatBox');
      var badge = document.querySelector('.chat-badge-dot');
      if(isOpen){ box.classList.add('open'); if(badge) badge.style.display='none'; }
      else { box.classList.remove('open'); }
    };
    document.getElementById('chatClose').addEventListener('click', function(){ isOpen=false; document.getElementById('chatBox').classList.remove('open'); });

    window.chatQuick = function(msg){
      addMessage(msg, 'user');
      var key = msg.toLowerCase();
      var rep = replies[key] || replies['default'];
      showBotTypingAndReply(rep, 800 + Math.random() * 400);
    };

    window.sendChat = function(){
      var inp = document.getElementById('chatInput');
      var msg = inp.value.trim();
      if(!msg) return;
      addMessage(msg, 'user');
      inp.value = '';
      var lc = msg.toLowerCase();
      var found = '';
      Object.keys(replies).forEach(function(k){ if(lc.includes(k) && k!=='default') found = replies[k]; });
      showBotTypingAndReply(found || replies['default'], 900 + Math.random() * 400);
    };

    function addMessage(text, type){
      var msgs = document.getElementById('chatMessages');
      var div = document.createElement('div');
      div.className = 'chat-msg ' + type;
      if(type==='bot') div.innerHTML = '<div class="chat-bot-avatar"><i class="bi bi-fish"></i></div><div class="chat-bubble">'+text+'</div>';
      else div.innerHTML = '<div class="chat-bubble">'+text+'</div>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function showBotTypingAndReply(repText, delay) {
      var msgs = document.getElementById('chatMessages');
      var typingDiv = document.createElement('div');
      typingDiv.className = 'chat-msg bot';
      typingDiv.innerHTML = '<div class="chat-bot-avatar"><i class="bi bi-fish"></i></div><div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
      msgs.appendChild(typingDiv);
      msgs.scrollTop = msgs.scrollHeight;
      
      setTimeout(function() {
        typingDiv.remove();
        addMessage(repText, 'bot');
      }, delay);
    }

    // ==========================================
    // DẤU ẤN 2: BỘ TRẮC NGHIỆM FIND MY SETUP QUIZ
    // ==========================================
    var quizAnswers = { type: null, size: null, budget: null };

    window.selectQuizVal = function(prop, val) {
      quizAnswers[prop] = val;
      if (prop === 'type') {
        document.getElementById('quiz-step-1').classList.add('d-none');
        document.getElementById('quiz-step-2').classList.remove('d-none');
      } else if (prop === 'size') {
        document.getElementById('quiz-step-2').classList.add('d-none');
        document.getElementById('quiz-step-3').classList.remove('d-none');
      } else if (prop === 'budget') {
        document.getElementById('quiz-step-3').classList.add('d-none');
        document.getElementById('quiz-results-box').classList.remove('d-none');
        showQuizRecommendations();
      }
    };

    window.resetQuiz = function() {
      quizAnswers = { type: null, size: null, budget: null };
      document.getElementById('quiz-step-1').classList.remove('d-none');
      document.getElementById('quiz-step-2').classList.add('d-none');
      document.getElementById('quiz-step-3').classList.add('d-none');
      document.getElementById('quiz-results-box').classList.add('d-none');
      document.getElementById('quiz-products-recs').innerHTML = '';
      
      // Restore original products rendering
      currentCat = 'all';
      document.getElementById('searchInput').value = '';
      // Uncheck quick filters
      ['filter-best-seller', 'filter-new-arrival', 'filter-on-sale', 'filter-high-rating'].forEach(function(id){
        var cb = document.getElementById(id);
        if(cb) cb.checked = false;
        var mCb = document.getElementById('m-' + id);
        if(mCb) mCb.checked = false;
      });
      // Reset sorting select
      document.getElementById('sortSelect').value = '';
      renderProductGrid();
    };

    function showQuizRecommendations() {
      var recIds = [];
      var title = "Bộ sản phẩm đề xuất";
      var desc = "Dựa trên hồ của bạn, Nemo gợi ý cấu hình tối ưu:";

      var t = quizAnswers.type;
      var s = quizAnswers.size;
      var b = quizAnswers.budget;

      if (t === 'koi') {
        title = "Hồ cá Koi Nhật Bản";
        if (s === 'large') {
          recIds = [1, 6];
          desc = "Cấu hình Cao Cấp cho Hồ Koi trên 500L: Hệ thống lọc công suất lớn + Máy bơm đẩy luồng tuần hoàn nước mạnh mẽ.";
        } else if (s === 'medium') {
          recIds = [6, 20];
          desc = "Cấu hình Tiêu Chuẩn cho Hồ Koi 100L-500L: Máy bơm Hsbao + Sứ lọc thanh Hoa Mai tăng vi sinh.";
        } else {
          recIds = [3, 20];
          desc = "Cấu hình Tiết Kiệm cho Hồ Koi dưới 100L: Men vi sinh xử lý nước nhanh + Sứ thanh lọc sinh học.";
        }
      } else if (t === 'planted') {
        title = "Hồ thủy sinh thiên nhiên";
        if (s === 'large' || s === 'medium') {
          recIds = [7, 9];
          desc = "Cấu hình Hồ Thủy Sinh vừa/lớn: Đèn LED RGB 11 màu kích thích quang hợp + Cây Dương Xỉ Java dễ chăm sóc.";
        } else {
          recIds = [13, 21];
          desc = "Cấu hình Hồ Thủy Sinh mini: Cây Sen Tiger tạo điểm nhấn đỏ + Rong tóc tiên tạo oxy tự nhiên.";
        }
      } else {
        title = "Hồ cá cảnh thông thường";
        if (s === 'large') {
          recIds = [1, 18];
          desc = "Cấu hình Hồ cá lớn: Hệ thống lọc AquaPro lọc sạch vượt trội + Dung dịch Detox khử Clo khi thay nước.";
        } else if (s === 'medium') {
          recIds = [12, 18];
          desc = "Cấu hình Hồ cá vừa: Máy lọc chìm Jingye 15W gọn nhẹ + Detox khử độc tố nước máy.";
        } else {
          recIds = [12, 4];
          desc = "Cấu hình Hồ cá nhỏ: Máy lọc chìm Jingye 15W siêu êm + Bi gốm Ceramic lọc sinh học.";
        }
      }

      var recsBox = document.getElementById('quiz-products-recs');
      recsBox.innerHTML = '';
      
      recIds.forEach(function(id) {
        var p = products.find(function(x) { return x.id === id; });
        if (!p) return;
        var cardHtml = 
          '<div class="col-6">' +
            '<div class="p-2 border rounded bg-white text-center h-100 d-flex flex-column justify-content-between">' +
              '<div>' +
                '<img src="' + p.image + '" style="height:55px; object-fit:contain;" class="mb-1" onerror="this.src=\'assets/images/categories/phu-kien.png\'">' +
                '<h6 class="m-0 text-dark text-truncate" style="font-size:0.75rem; font-weight:600;">' + p.name + '</h6>' +
                '<span class="text-danger fw-bold" style="font-size:0.72rem;">' + p.price + '</span>' +
              '</div>' +
              '<button type="button" class="btn btn-sm btn-primary w-100 py-0.5 mt-1" style="font-size:0.68rem; font-weight:bold; border-radius:8px;" onclick="openBuyModal(' + p.id + ')">Mua nhanh</button>' +
            '</div>' +
          '</div>';
        recsBox.innerHTML += cardHtml;
      });

      document.getElementById('quiz-res-title').textContent = title + " - Đề xuất từ Nemo";
      document.getElementById('quiz-res-desc').textContent = desc;

      var filtered = products.filter(function(p) {
        return recIds.includes(p.id);
      });
      
      document.getElementById('resultCount').textContent = filtered.length;
      var grid = document.getElementById('productGrid');
      grid.innerHTML = filtered.map(function(p){
        return '<div class="col-6 col-md-4">' +
          '<div class="product-card-new">' +
            (p.badge?'<span class="product-badge '+p.badge+'">'+p.badgeText+'</span>':'') +
            '<div class="product-img-wrap"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy" onerror="this.src=\'assets/images/categories/phu-kien.png\'"></div>' +
            '<div class="product-card-body">' +
              '<span class="product-cat-label">'+p.catLabel+'</span>' +
              '<h5 class="product-name">'+p.name+'</h5>' +
              '<p class="product-meta-info">'+p.desc.substring(0,60)+'...</p>' +
              '<div class="product-stars"><span class="stars">'+stars(p.rating)+'</span><span class="review-count">('+p.reviewCount+')</span></div>' +
              '<div class="product-price-row">' +
                '<span class="product-price">'+p.price+'</span>' +
                (p.priceOld?'<span class="product-price-old">'+p.priceOld+'</span>':'') +
                (p.discount?'<span class="product-discount">'+p.discount+'</span>':'') +
              '</div>' +
              '<div class="product-actions">' +
                '<button class="btn-mua-ngay" onclick="openBuyModal('+p.id+')"><i class="bi bi-bag-fill me-1"></i>Mua ngay</button>' +
                '<button class="btn-xem-chi-tiet" onclick="showDetail('+p.id+')">Chi tiết</button>' +
              '</div>' +
            '</div>' +
          '</div></div>';
      }).join('');
    }




