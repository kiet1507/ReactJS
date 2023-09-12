import React from "react";
import "./profile.css";

import {
  CompassOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Profile = () => {
  const imagePath = Image;
  const imageStyle = {
    width: "1070px",
    height: "200px",
  };

  console.log('image path: ', imagePath)
  return (
    <div>
      <header>
        <div className="header">
          <img src={'/images/test.jpg'} style={imageStyle} className="elon" alt="" />
          <div className="profile">
            <h2 className="h2">PROFILE</h2>
            <p>
              Xin chào, tôi là một lập trình viên có kinh nghiệm trong việc phát
              triển ứng dụng web và di động. Từ việc thiết kế giao diện đến xây
              dựng cơ sở dữ liệu và triển khai, tôi đã tham gia vào quá trình
              hoàn thiện các dự án từ đầu đến cuối. Sự am hiểu sâu sắc về HTML,
              CSS, JavaScript và các ngôn ngữ lập trình khác cho phép tôi tạo ra
              các trải nghiệm tương tác động và thú vị. Tôi đặc biệt quan tâm
              đến việc áp dụng các tiêu chuẩn tốt nhất và tạo ra mã nguồn dễ bảo
              trì. Tôi thích thách thức và luôn tìm kiếm cơ hội để học hỏi và
              phát triển kỹ năng của mình trong môi trường công nghệ đang thay
              đổi nhanh chóng
            </p>
          </div>
        </div>
        <div className="bar-1">
          <p className="pro-title">Professional Title</p>
          <p className="name">Elon Musk</p>
        </div>
      </header>

      <div className="content">
        <aside className="column-1">
          
        <div className="box-1">
            <div className="f1">
              <h3 className="title">Contact</h3>
              <div>
                <div>
                  <CompassOutlined className="icon" />
                  <p className="info">130 Washington st</p>
                </div>
                <div>
                  <PhoneOutlined className="icon" />
                  <p className="info">0903674777</p>
                </div>
                <div>
                  <MailOutlined className="icon" />
                  <p className="info">elonmush@gmail.com</p>
                </div>
                <div>
                  <FacebookOutlined className="icon" />
                  <p className="info">facebook.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-1">
            <div className="expertise">
              <h3 className="title">Expertise</h3>
              <div>
                <div>
                  <CompassOutlined className="icon" />
                  <p className="info">130 Washington st</p>
                </div>
                <div>
                  <PhoneOutlined className="icon" />
                  <p className="info">0903674777</p>
                </div>
                <div>
                  <MailOutlined className="icon" />
                  <p className="info">elonmush@gmail.com</p>
                </div>
                <div>
                  <FacebookOutlined className="icon" />
                  <p className="info">facebook.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="box-1">
            <div className="education">
              <h3 className="title">Education</h3>
              <div>
                <div>
                  <CompassOutlined className="icon" />
                  <p className="info">130 Washington st</p>
                </div>
                <div>
                  <PhoneOutlined className="icon" />
                  <p className="info">0903674777</p>
                </div>
                <div>
                  <MailOutlined className="icon" />
                  <p className="info">elonmush@gmail.com</p>
                </div>
                <div>
                  <FacebookOutlined className="icon" />
                  <p className="info">facebook.com</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="part-2">
          <div className="main-content">
            <h2 className="h1">Work Experience</h2>
            <div className="job-1">
              <p>JOB TITLE</p>

              <p>COMPANY NAME</p>

              <p>2021-Hiện tại</p>
            </div>
            <div className="content-1">
              Năm 2021-hiện tại: Gia nhập AI Solutions, nơi tôi áp dụng những
              kiến thức trong lĩnh vực trí tuệ nhân tạo vào công việc phân tích
              dữ liệu và đưa ra các giải pháp thông minh cho khách hàng.
            </div>

            <div className="li">
              <li>
                Đảm nhận vai trò lập trình viên với trách nhiệm phát triển và
                duy trì mã nguồn trong môi trường công nghệ đa dạng.
              </li>
              <li>
                Tập trung vào viết mã, thử nghiệm và tối ưu hóa ứng dụng để đáp
                ứng yêu cầu kỹ thuật và chất lượng cao.
              </li>
              <li>
                Hợp tác chặt chẽ với các thành viên trong đội phát triển, tham
                gia vào các giai đoạn thiết kế, phát triển và triển khai dự án
                công nghệ.
              </li>
            </div>
            <div className="job-1">
              <p>JOB TITLE</p>

              <p>COMPANY NAME</p>

              <p>Năm 2019-2020</p>
            </div>
            <div className="content-1">
              Thăng tiến thành Technical Lead tại CodeWave, tôi giúp dẫn dắt đội
              phát triển, định hình kiến thức và xây dựng kiến thức về kiến
              thức.
            </div>

            <div className="li">
              <li>
                Đảm nhận vai trò lập trình viên với trách nhiệm phát triển và
                duy trì mã nguồn trong môi trường công nghệ đa dạng.
              </li>
              <li>
                Tập trung vào viết mã, thử nghiệm và tối ưu hóa ứng dụng để đáp
                ứng yêu cầu kỹ thuật và chất lượng cao.
              </li>
              <li>
                Hợp tác chặt chẽ với các thành viên trong đội phát triển, tham
                gia vào các giai đoạn thiết kế, phát triển và triển khai dự án
                công nghệ.
              </li>
            </div>

            <div className="job-1">
              <p>JOB TITLE</p>

              <p>COMPANY NAME</p>

              <p>Năm 2017-2018</p>
            </div>
            <div className="content-1">
              Tôi chuyển đến MindTech, một tập đoàn công nghệ lớn. Ở vị trí lập
              trình viên chính, tôi tham gia vào dự án phát triển ứng dụng quan
              trọng và đảm nhận vai trò của một mentor cho những thành viên mới.
            </div>

            <div className="li">
              <li>
                Đảm nhận vai trò lập trình viên với trách nhiệm phát triển và
                duy trì mã nguồn trong môi trường công nghệ đa dạng.
              </li>
              <li>
                Tập trung vào viết mã, thử nghiệm và tối ưu hóa ứng dụng để đáp
                ứng yêu cầu kỹ thuật và chất lượng cao.
              </li>
              <li>
                Hợp tác chặt chẽ với các thành viên trong đội phát triển, tham
                gia vào các giai đoạn thiết kế, phát triển và triển khai dự án
                công nghệ.
              </li>
            </div>

            <div className="job-1">
              <p>JOB TITLE</p>

              <p>COMPANY NAME</p>

              <p>Năm 2015-2016</p>
            </div>
            <div className="content-1">
              Tôi chuyển đến MindTech, một tập đoàn công nghệ lớn. Ở vị trí lập
              trình viên chính, tôi tham gia vào dự án phát triển ứng dụng quan
              trọng và đảm nhận vai trò của một mentor cho những thành viên mới.
            </div>

            <div className="li">
              <li>
                Đảm nhận vai trò lập trình viên với trách nhiệm phát triển và
                duy trì mã nguồn trong môi trường công nghệ đa dạng.
              </li>
              <li>
                Tập trung vào viết mã, thử nghiệm và tối ưu hóa ứng dụng để đáp
                ứng yêu cầu kỹ thuật và chất lượng cao.
              </li>
              <li>
                Hợp tác chặt chẽ với các thành viên trong đội phát triển, tham
                gia vào các giai đoạn thiết kế, phát triển và triển khai dự án
                công nghệ.
              </li>
            </div>

            <div className="job-1">
              <p>JOB TITLE</p>

              <p>COMPANY NAME</p>

              <p>Năm 2013-2014</p>
            </div>
            <div className="content-1">
              Bắt đầu sự nghiệp tại Tech Innovators, tôi làm việc như một lập
              trình viên mới ra trường. Tôi được hướng dẫn về quy trình phát
              triển phần mềm và tiếp xúc với dự án thực tế.
            </div>

            <div className="li">
              <li>
                Đảm nhận vai trò lập trình viên với trách nhiệm phát triển và
                duy trì mã nguồn trong môi trường công nghệ đa dạng.
              </li>
              <li>
                Tập trung vào viết mã, thử nghiệm và tối ưu hóa ứng dụng để đáp
                ứng yêu cầu kỹ thuật và chất lượng cao.
              </li>
              <li>
                Hợp tác chặt chẽ với các thành viên trong đội phát triển, tham
                gia vào các giai đoạn thiết kế, phát triển và triển khai dự án
                công nghệ.
              </li>
            </div>

            <h2 className="h1">REFERENCES</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
