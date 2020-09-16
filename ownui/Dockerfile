FROM nginx
MAINTAINER jin
RUN rm /etc/nginx/conf.d/default.conf
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
ADD nginx.conf /etc/nginx/conf.d/default.conf
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
EXPOSE 80
RUN /bin/bash-c