import { $http } from './index';

// 모든 일기 목록 가져오기
function fetchAllDiaryList() {
  return $http.get('/diary');
}

// 특정 일기 가져오기
function fetchAnyDiary(id) {
  return $http.get(`diary/${id}`);
}

// 새로운 일기 등록하기
function postDiary(dto) {
  return $http.post('diary', dto);
}

// 특정 일기 수정하기
function modifyDiary(id, dto) {
  return $http.put(`diary/${id}`, dto);
}

// 특정 일기 삭제하기
function deleteDiary(id) {
  return $http.delete(`diary/${id}`);
}

export {
  fetchAllDiaryList,
  fetchAnyDiary,
  postDiary,
  modifyDiary,
  deleteDiary,
};
