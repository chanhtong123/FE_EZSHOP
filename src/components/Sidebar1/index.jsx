import React from "react";
import { Text, Img } from "./..";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false); //use this function to collapse/expand the sidebar  //function collapseSidebar() {  //    setCollapsed(!collapsed)  //}
  return (
    <Sidebar
      {...props}
      width="242px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-screen top-0 !sticky overflow-auto md:hidden`}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: "17px",
            alignSelf: "start",
            borderRadius: "16px",
            [`&:hover, &.ps-active`]: { backgroundColor: "#19b269 !important" },
          },
        }}
        className="w-full self-stretch"
      >
        <div>
          <div>
            <MenuItem
              icon={
                <>
                  <Img
                    src="images/img_home.svg"
                    alt="user"
                    className="h-[20px] w-[20px]"
                  />
                  Bảng quản lý
                </>
              }
            />
          </div>
          <div>
            <div className="flex items-start">
              <div className="relative z-[1] flex flex-1 flex-col">
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_cash_on_delivery.svg"
                        alt="cashon"
                        className="h-[20px] w-[20px]"
                      />
                      Các sản phẩm
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_order.svg"
                        alt="vector"
                        className="h-[20px] w-[20px]"
                      />
                      Đặt hàng
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_growth_1.svg"
                        alt="growthone"
                        className="h-[20px] w-[20px]"
                      />
                      Khách hàng
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_fi_10139649.svg"
                        alt="fi10139649"
                        className="h-[20px] w-[20px]"
                      />
                      Người bán
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_folder_1.svg"
                        alt="folderone"
                        className="h-[20px] w-[20px]"
                      />
                      Thể loại
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_settings_1.svg"
                        alt="settingsone"
                        className="h-[20px] w-[20px]"
                      />
                      Cài đặt
                    </>
                  }
                />
                <MenuItem
                  icon={
                    <>
                      <Img
                        src="images/img_log_out.svg"
                        alt="television"
                        className="h-[20px] w-[20px]"
                      />
                      Đăng xuất
                    </>
                  }
                />
              </div>

            </div>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
