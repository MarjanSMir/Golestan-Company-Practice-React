import "./body.css";
import "./partials/mobile.css";
const body = () => {
  return (
    <div className="container">
      <div className="section-1">
        <div className="text">
          <h1>قرعه‌کشی ماهیانه گلستان</h1>
          <h2>قرعه‌کشی ماهیانه مصرف‌کنندگان چای گلستان</h2>
          <p className="para-1">
            هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
            کشی روی بسته به شماره 30007405 در قرعه کشی‌های ماهیانه سال 1403شرکت
            کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
          </p>
          <button className="btn-1">اطلاعات بیشتر</button>
        </div>
        <div className="product-image"></div>
      </div>

      <div className="section-2">
        <hr
          style={{
            width: "100%",
            position: "relative",
            margin: "-1rem 0 4rem 0",
          }}
        />
        <h2>معرفی گلستان</h2>
        <p>
          آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده
          شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی
          آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت
          شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی
          بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها تلاش همچنان
          می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل
          اعتماد و با کیفیت تولید نماید. هدفمندی و برنامه‌ریزی موثر، ایمان و عزم
          راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و
          دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل
          مهم در استراتژی شرکت گلستان است.
        </p>
        <div className="h2">محصولات گلستان</div>
        <p>
          نام تجاری گلستان قدمتی به اندازه عمر شرکت گلستان دارد. گلستان
          ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان
          محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر
          بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.
        </p>
        <div className="box">
          <div className="box-icon">
            <div className="image image-1"></div>
            <p>سرمایه انسانی</p>
          </div>
          <div className="box-icon">
            <div className="image image-2"></div>
            <p>مراکز فروش</p>
          </div>
          <div className="box-icon">
            <div className="image image-3"></div>
            <p>محصولات گلستان</p>
          </div>
          <div className="box-icon">
            <div className="image image-4"></div>
            <p>مشتریان گلستان</p>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            position: "relative",
            margin: "9rem 0 -1rem 0",
          }}
        />
      </div>
      <div className="section-3">
        <div className="background-rice">
          <div className="box-cream">
            <div className="productbox">
              <h3>برنج گلستان</h3>
              <h4>معرفی محصول</h4>
            </div>
          </div>
        </div>
        <div className="section-2">
          <hr
            style={{
              width: "100%",
              position: "relative",
              margin: "-1rem 0 4rem 0",
            }}
          />
          <h2>رکن اول غذای ایرانی</h2>
          <p>
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
          <div className="buttons">
            <button className="btn-1 btn-margin">محصولات برنج</button>
            <button className="btn-1">آشپزخانه گلستان</button>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="background-tea">
          <div className="box-cream">
            <div className="productbox">
              <h3>چای گلستان</h3>
              <h4>معرفی محصول</h4>
            </div>
          </div>
        </div>
        <div className="section-2">
          <hr
            style={{
              width: "100%",
              position: "relative",
              margin: "-1rem 0 4rem 0",
            }}
          />
          <h2>سابقه‌ای به قدمت یک عمر</h2>
          <p>
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد
            <br />
            <br /> برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌
            قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
            دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده
            مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
            یادماندنی آن است.
          </p>
          <div className="buttons">
            <button className="btn-1 btn-margin">محصولات چای</button>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="background-nuts">
          <div className="box-cream">
            <div className="productbox">
              <h3>پسته گلستان</h3>
              <h4>معرفی محصول</h4>
            </div>
          </div>
        </div>
        <div className="section-2">
          <hr
            style={{
              width: "100%",
              position: "relative",
              margin: "-1rem 0 4rem 0",
            }}
          />
          <h2>آجيل‌های خوش خنده</h2>
          <p>
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
            معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
            <br />
            <br /> پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست.
            مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس
            از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران
            درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و
            عطری بی‌نظیر به ارمغان می‌آورد.
          </p>
          <div className="buttons">
            <button className="btn-1 btn-margin">ناتس گلستان</button>
          </div>
        </div>
      </div>
      <div className="section-4">
        <h2 className="title">مجله گلستان</h2>
        <div className="gallery">
          <div className="post">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic2.jpg"
              alt=""
            />
            <h3 className="title">ماکارونی با سبزیجات</h3>
            <p>
              ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
              می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
              روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>
            <button className="btn-1 other">ادامه مطلب</button>
          </div>
          <div className="post">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/06/recipe-pic-Chilakile-1401.jpg"
              alt=""
            />
            <h3 className="title">چیلاکیله</h3>
            <p>
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </p>
            <button className="btn-1 other">ادامه مطلب</button>
          </div>
          <div className="post">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic3.jpg"
              alt=""
            />
            <h3 className="title">سوپ مکزیکی</h3>
            <p>
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>
            <button className="btn-1 other">ادامه مطلب</button>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="gallery bg-white gallery-height">
          <div className="post">
            <iframe
              title="غذای خوشمزه و سریع با نودل"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              src="https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame"
            ></iframe>
            <h3 className="title">سالاد نودل</h3>
            <p>
              ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
              می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
              روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
            </p>
            <button className="btn-1 other">ویدیوهای بیشتر</button>
          </div>
          <div className="post">
            <iframe
              title="معرفی صفحه اینستاگرام هاتی نودل"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              src="https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame"
            ></iframe>
            <h3 className="title">اینستاگرام هاتی نودل</h3>
            <p>
              احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
              فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
              فهرست
            </p>
            <button className="btn-1 other">ویدیوهای بیشتر</button>
          </div>
          <div className="post">
            <iframe
              title="تیزر تبلیغاتی برنج گلستان"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              src="https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame"
            ></iframe>
            <h3 className="title">برنج گلستان</h3>
            <p>
              گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
              آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
              بیرون آورده…
            </p>
            <button className="btn-1 other">ویدیوهای بیشتر</button>
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="text-wraper">
          <h3 className="fa-golestan">مسئولیت های اجتماعی شرکت گلستان</h3>
          <hr className="hr-color" />
          <p className="en-golestan">Goldtan Social Responsibility</p>
          <p className="en-hos">Mahdi Hospital</p>
        </div>
        <div className="box-cream"></div>
        <hr style={{ marginTop: "2rem" }} />
        <div className="img-hospital"></div>
      </div>
      <div className="section-6">
        <h2 className="title">مسئولیت های اجتماعی</h2>
        <p>
          كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
          قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از
          درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان
          برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در
          فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در
          دستوركار خود قرار داده است.
        </p>
        <div className="buttons">
          <button className="btn-1 btn-margin">اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default body;
