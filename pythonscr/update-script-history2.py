import json
import os
import requests
import matplotlib.pyplot as plt
import pandas as pd
import mplcyberpunk

# 读取 JSON 文件
with open('docs/ScriptsPath.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

for script in data['scripts']:
    # 获取 GreasyFork 的 ID 和备份路径
    greasyfork_id = script['GreasyFork']
    backuppath = script['backuppath']
    
    # 构造 URL
    url = f'https://greasyfork.org/zh-CN/scripts/{greasyfork_id}/stats.json'
    
    # 获取数据
    response = requests.get(url)
    star_json = json.loads(response.text)
    
    star_date = []
    star_installs = []
    star_temp = 0
    
    for i in star_json:
        star_date.append(str(i))
        star_temp += star_json[i]['installs']
        star_installs.append(star_temp)
    
    # 打印调试信息
    print(star_date)
    print(star_installs)
    
    # 确保文件夹存在
    output_dir = os.path.join(backuppath, 'preview')
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # 绘制图像
    plt.style.use("cyberpunk")
    plt.figure(figsize=(20, 10), dpi=100)
    plt.rcParams['font.sans-serif'] = ['HYWenHei']  # 用来正常显示中文标签
    plt.title("Github搜索净化", fontdict={'size': 30})
    plt.xlabel("时间", fontdict={'size': 30})
    plt.ylabel("总安装数（Greasy Fork）", fontdict={'size': 30})
    plt.xticks(fontsize=20)
    plt.yticks(fontsize=20)
    plt.plot(pd.to_datetime(star_date), star_installs, linewidth=4.0)
    plt.savefig(os.path.join(output_dir, 'statshistory.png'))
    plt.close()
