import agent from './agent.js';

export function createBoard(boardName) {
  return agent.post(`/boards/?name=${encodeURIComponent(boardName)}`);
}

export function getBoard(boardId) {
  return agent.get(`/boards/${boardId}`);
}

export function updateBoard(boardId, updateData) {
  const params = new URLSearchParams(updateData).toString();
  return agent.put(`/boards/${boardId}?${params}`);
}

export function deleteBoard(boardId) {
  return agent.delete(`/boards/${boardId}`);
}
