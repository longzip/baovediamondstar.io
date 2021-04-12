<template>
  <div class="footer-06">
    <div class="container">
      <!-- Row 1 Starts -->
      <div class="row row1">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <h2 class="mau-trang">
            Công ty bảo vệ uy tín - Tuyển dụng bảo vệ ở Hà Nội
          </h2>
        </div>
        <!-- Social Icons Starts -->
        <div class="col-lg-3 col-md-3 col-sm-3">
          <ul class="social-icons">
            <li>
              <a href=""><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/vieclambaovediamondstar"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <!-- Social Icons Ends -->
      </div>
      <!-- Row 1 Ends -->
      <!-- Row 2 Starts -->
      <div class="row row2">
        <!-- Tags Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 clearfix tags">
          <h4 class="tieu-de">Từ khóa tìm kiếm</h4>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h4 class="tieu-de">Tin tuyển dụng mới nhất</h4>
          <ul>
            <li v-for="job in jobs" :key="job._id">
              <nuxt-link :to="'/tuyen-dung/' + job.slug.current + '/'">{{
                job.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Recent Posts Ends -->
        <!-- From Blog Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 from-blog">
          <h4 class="tieu-de">Xin làm bảo vệ</h4>
          <ul>
            <li class="clearfix">
              <div class="picture">
                <img src="/images/footer/1.jpg" alt="việc làm bảo vệ" />
              </div>
              <div class="info">
                <div class="caption">
                  <a href="#">Tôi ở Vĩnh Phúc xin làm bảo vệ được không?</a>
                </div>
                <div class="date">
                  Ngày đăng {{ new Date().toLocaleDateString() }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- From Blog Ends -->
        <!-- About Us Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 about">
          <h4 class="tieu-de">Việc làm bảo vệ ở Vĩnh Phúc</h4>
          <div class="description">
            <strong
              >Thông tin Công Ty Tnhh Liên Doanh Dịch Vụ Bảo Vệ Diamondstar: mã
              số thuế: 0107430277, có địa chỉ trụ sở Xóm Đông Bảo Tháp, Xã Kim
              Hoa, Huyện Mê Linh, Hà Nội:</strong
            ><br />
            <strong>Cần tuyển dụng</strong>
            <em>nhân viên bảo vệ và an ninh</em> tòa nhà, siêu thị, nhà máy làm
            việc tại KCN Bắc Thăng Long, KCN Quang Minh, KCN Nội Bài, Khu vực
            Đông Anh, Hà Nội
            <p>
              <a
                href="//www.dmca.com/Protection/Status.aspx?id=d9ea0bf4-6bcd-4da6-aaae-b518d885cb37"
                title="DMCA.com Protection Status"
                class="dmca-badge"
              >
                <img
                  src="//images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=d9ea0bf4-6bcd-4da6-aaae-b518d885cb37"
                  alt="DMCA.com Protection Status"
              /></a>
              <script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
            </p>
          </div>
          <div class="call-mobile">
            <a id="callnowbutton" href="tel:0978333963">097 833 39 63</a
            ><i class="fa fa-phone"></i>
          </div>
          <!-- Your Chat Plugin code -->
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="110522487140550"
          ></div>
        </div>
        <!-- About Us Ends -->
      </div>
      <!-- Row 2 Ends -->
    </div>
    <!-- Load Facebook SDK for JavaScript -->
    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    </script>

    <!-- Facebook Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/vi_VN/fbevents.js'
      )
      fbq('init', '241950547678859')
      fbq('track', 'PageView')
    </script>

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="page_inbox"
      page_id="102576758124389"
    ></div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-SFDXCZ47RJ"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-VX3LKDES3Y')
    </script>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        {
          _id: '304bbbfc-5e79-4e0a-90a6-a93c4744a3e6',
          slug: {
            _type: 'slug',
            current:
              'tuyen-gap-05-nhan-vien-an-ninh-va-bao-ve-tai-hung-yen-di-lam-ngay',
          },
          title:
            'Tuyển gấp 05 Nhân viên an ninh và bảo vệ tại Hưng Yên Đi làm ngay',
        },
        {
          _id: '304bbbfc-5e79-4e0a-90a6-a93c4744a3e7',
          slug: {
            _type: 'slug',
            current:
              'tuyen-gap-01-doi-truong-tim-viec-lam-doi-truong-bao-ve-tai-ha-noi',
          },
          title:
            'Tuyển gấp 01 đội trưởng Tìm việc làm đội trưởng bảo vệ tại Hà Nội',
        },
        {
          _id: '304bbbfc-5e79-4e0a-90a6-a93c4744a3b7',
          slug: {
            _type: 'slug',
            current:
              'tuyen-03-ca-truong-va-nhan-vien-bao-ve-khu-cong-nghiep-quang-minh',
          },
          title:
            'Tuyển 03 ca trưởng và nhân viên bảo vệ khu công nghiệp quang minh',
        },
      ],
      tuKhoas: [
        'công ty bảo vệ uy tín',
        'công ty bảo vệ uy tín tại hà nội',
        'dịch vụ bảo vệ uy tín',
        'dịch vụ bảo vệ tại hà nội',
        'báo giá dịch vụ bảo vệ tại hà nội',
        'dịch vụ bảo vệ hà nội',
        'dịch vụ bảo vệ chuyên nghiệp tại hà nội',
        'công ty bảo vệ tại hưng yên',
      ],
    }
  },
}
</script>
<style scoped>
.tieu-de {
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 30px;
}
</style>
