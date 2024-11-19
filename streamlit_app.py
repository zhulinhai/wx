import streamlit as st
import os

# 设置页面标题
st.title("Toyota 2017 Movie 项目案例")

# 显示 index.html 文件的内容
html_file_path = os.path.join("toyota2017_movie", "index.html")

if os.path.exists(html_file_path):
    with open(html_file_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    st.components.v1.html(html_content, height=600)
else:
    st.error("未找到 index.html 文件。请确保文件路径正确。")
