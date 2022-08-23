<template>
    <table>
        <thead>
            <tr>
                <th>
                    이름
                </th>
                <th>
                    제목
                </th>
                <th>
                    그냥
                </th>
            </tr>
        </thead>
        <tbody>
            <tr :key="index" v-for="(value, index) in data">
                <td>{{value.witer}}</td>
                <td>{{value.title}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    //데이터
    import data from '@/data/JsonData'
    export default {
        name : '리스트',
        data() {
            return{
                data : data
            }
        }
    }
</script>