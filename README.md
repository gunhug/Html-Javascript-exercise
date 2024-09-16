Scroll animatinon content
- nếu cho màn hình chiều cao height:1000px thì đoạn code sẽ có vấn đề liên quan đến giá trị triggerBox
  + triggerBox sẽ bằng 1000/5*4 =800px => .bot di chuyển vào vị trí có botTop < 800px so với đỉnh cửa sổ thì .active được thêm vào
-> nếu các .box nằm ở phần dưới 800px sẽ không đạt điều kiện để thêm lớp .active
