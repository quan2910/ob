import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-distric',
  templateUrl: './distric.component.html',
  styleUrls: ['./distric.component.css']
})
export class DistricComponent implements OnInit {
  public districts:string[] = ['Chọn quận, huyện']
  public provinces = [
    {
      province: 'Chọn tỉnh thành', districts: []
    },
    {
      province: 'An Giang', districts: ['Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',]
    },
    {
      province: 'Thái Nguyên', districts: [
        'Thành phố Thái Nguyên',
        'Thành phố Sông Công',
        'Thành phố Phổ Yên',
        'Huyện Đại Từ',
        'Huyện Phú Bình',
        'Huyện Phú Lương',
        'Huyện Đồng Hỷ',
        'Huyện Võ Nhai',
        'Huyện Định Hoá',
      ]
    }
  ]

  ngOnInit(): void {
    console.log('province: ', this.provinces)
  }

  changeProvince(event: any) {
    const province = event.target.value;
    if(!province) {
      return;
    }
    // cách 1
    // const search = this.provinces.filter(data => data.province === province)
    // if(search && search.length > 0) {
    //   this.districts = search[0].districts
    // }
    // cách 2
      this.districts = this.provinces.find(data => data.province === province)?.districts || []
  }
}
