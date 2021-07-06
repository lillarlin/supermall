import axios from 'axios'


    export function request(config){
        //1,创建axios实例
     
            const instence=axios.create({
                baseURL:'http://152.136.185.210:7878/api/m5',
            
                timeout:5000
             

            })
            //axios拦截器
              //1请求拦截器
        //  instence.interceptors.request.use(aaa=>{console.log(aaa); return aaa},err=>console.log(err))
           //aaa就是config，一些配置文件，不返回就会出错

            //2响应拦截
            instence.interceptors.response.use(res=>{return res.data},err=>console.log(err))
                           //拦截成功，如果不返回main.js里面会出错，返回可以只返回data，其他配置可以不返回


            //2，发送请求
            return  instence(config)
            //instence是axios实例，axios返回的就是promise
            // 因为instence对应的就是promise对象，所以不用封装成promise，可以直接返回
        
        }