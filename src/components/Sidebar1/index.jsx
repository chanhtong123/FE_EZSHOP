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
          <div className="flex items-start">
            <div className="relative z-[1] flex flex-1 flex-col">
              <MenuItem
                icon={
                  <Img
                    src="images/img_home.svg"
                    alt="cashon"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Bảng quản lý
                  </Text>
                }
                href="/admin-dashboard"
              />
              <MenuItem
                icon={
                  <Img
                    src="images/img_products.svg"
                    alt="vector"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Sản phẩm
                  </Text>
                }
                href="/admin-products"
              />
              <MenuItem
                icon={
                  <Img
                    src="images/img_orders.svg"
                    alt="growthone"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Đơn hàng
                  </Text>
                }
                href="/admin-orders"
              />
              <MenuItem
                icon={
                  <Img
                    src="images/img_users.svg"
                    alt="fi10139649"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Người dùng
                  </Text>
                }
                href="/admin-users"
              />
              <MenuItem
                icon={
                  <Img
                    src="images/img_shops.svg"
                    alt="folderone"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Cửa hàng
                  </Text>
                }
                href="/admin-shops"
              />
              <MenuItem
                icon={
                  <Img
                    src="images/img_categories.svg"
                    alt="settingsone"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Danh mục
                  </Text>
                }
                href="/admin-categories"
              />
              {/* <MenuItem
                    icon={
                      <Img
                        src="images/img_settings.svg"
                        alt="settingsone"
                        className="h-[20px] w-[20px]"
                      />
                    }
                    prefix={
                      <Text as="p"
                        className="ml">
                          Cài đặt
                      </Text>
                    }
                  /> */}
              <MenuItem
                icon={
                  <Img
                    src="images/img_logout.svg"
                    alt="television"
                    className="h-[20px] w-[20px]"
                  />
                }
                prefix={
                  <Text as="p" className="ml">
                    Đăng xuất
                  </Text>
                }
              />
            </div>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
