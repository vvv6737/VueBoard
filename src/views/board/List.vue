<template>
	<div>
		<h2>게시판 리스트</h2>
		<a href="javascript:;" @click="getList">GET 방식 데이터 접근</a>
	</div>
	<div class="board-list">
		<div class="common-buttons">
			<button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
		</div>
		<table class="w3-table-all">
			<thead>
				<tr>
					<th>No</th>
					<th>제목</th>
					<th>작성자</th>
					<th>등록일시</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, idx) in list" :key="idx" v-on:click="fnView(`${row.boardSeq}`)">
					<td>{{ row.boardSeq }}</td>
					<td>{{ row.title }}</td>
					<td>{{ row.userId }}</td>
					<td>{{ row.uploadDate }}</td>
				</tr>
			</tbody>
		</table>

		<div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.totalListCnt > 0">
			<span class="pg">
				<a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
				<a href="javascript:;" v-if="paging.startPage > 10" @click="fnPage(`${paging.startPage - 1}`)"
					class="prev w3-button w3-border">&lt;</a>
				<template v-for=" (n, index) in paginavigation()">
					<template v-if="paging.page == n">
						<strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
					</template>
					<template v-else>
						<a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
					</template>
				</template>
				<a href="javascript:;" v-if="paging.totalPageCnt > paging.endPage" @click="fnPage(`${paging.endPage + 1}`)"
					class="next w3-button w3-border">&gt;</a>
				<a href="javascript:;" @click="fnPage(`${paging.totalPageCnt}`)"
					class="last w3-button w3-border">&gt;&gt;</a>
			</span>
		</div>

		<div>
			<select v-model="searchKey">
				<option value="0">제목 + 내용</option>
				<option value="1">작성자</option>
				<option value="2">제목</option>
				<option value="3">내용</option>
			</select>
			&nbsp;
			<input type="text" v-model="searchValue" @keyup.enter="fnPage(1)">
			&nbsp;
			<button @click="fnPage(1)">검색</button>
		</div>
	</div>
</template>
  
<script>
export default {
	data() { //변수생성
		return {
			requestBody: {}, //리스트 페이지 데이터전송
			list: {}, //리스트 데이터
			no: '', //게시판 숫자처리
			paging: {
				block: 0,
				endPage: 0,
				nextBlock: 0,
				page: 0,
				pageSize: 0,
				prevBlock: 0,
				startIndex: 0,
				startPage: 0,
				totalBlockCnt: 0,
				totalListCnt: 0,
				totalPageCnt: 0,
			}, //페이징 데이터
			page: this.$route.query.page ? this.$route.query.page : 1,
			size: this.$route.query.size ? this.$route.query.size : 10,
			searchKey: this.$route.query.sk ? this.$route.query.sk : '0',
      		searchValue: this.$route.query.sv ? this.$route.query.sv : '',
			keyword: this.$route.query.keyword,
			paginavigation: function () { //페이징 처리 for문 커스텀
				let pageNumber = [] //;
				let startPage = this.paging.startPage;
				let endPage = this.paging.endPage;
				for (let i = startPage; i <= endPage; i++) pageNumber.push(i);
				return pageNumber;
			}
		}
	},
	mounted() {
		this.fnGetList()
	},
	methods: {
		getList() {
			this.$axios.get(this.$serverUrl + "/board/list")
				.then((res) => {
					console.log(res.data);
				})
				.then((err) => {
					console.log(err);
				})
		},

		fnGetList() {
			this.requestBody = { // 데이터 전송
				// keyword: this.keyword,
				sk: this.searchKey,
				sv: this.searchValue,
				page: this.page,
				pageSize: this.size
			}

			this.$axios.get(this.$serverUrl + "/board/list", {
				params: this.requestBody,
				headers: {}

			}).then((res) => {
				this.list = res.data.resList;
				this.paging = res.data.pagination;
				this.paging.totalListCnt = res.data.totalCount;
				this.no = this.paging.totalListCnt - ((this.paging.page - 1) * this.paging.pageSize)

			}).catch((err) => {
				if (err.message.indexOf('Network Error') > -1) {
					alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
				}
				console.log(err);
			})
		},

		fnView(idx) {
			this.requestBody.idx = idx
			this.$router.push({
				path: './detail',
				query: this.requestBody
			})
		},
		fnWrite() {
			this.$router.push({
				path: './write'
			})
		},
		fnPage(n) {
			if (this.page !== n) {
				this.page = n
			}
			this.fnGetList()
		}
	}
}
</script>

<style scoped></style>