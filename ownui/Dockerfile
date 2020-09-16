FROM registry.cn-hangzhou.aliyuncs.com/jenkinsdocker/docker1
# 定义作者
MAINTAINER jin
# 将dist文件中的内容复制到 /etc/nginx/html/ 这个目录下面
COPY dist/  /etc/nginx/html/
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
ADD nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
RUN /bin/bash-c