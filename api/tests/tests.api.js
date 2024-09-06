import {expect} from 'chai';
import {createBoard, deleteBoard, getBoard, updateBoard} from '../utils/helpers/trelloBoardApiHelpers.js';

describe('Trello API tests', () => {
  let boardId;
  const boardName = 'Api test board';

  beforeEach(async () => {
    // create a new board and verify creation
    const createdBoardResponse = await createBoard(boardName).expect(200);
    const createdBoard = createdBoardResponse.body;
    boardId = createdBoard.id;

    expect(createdBoardResponse.headers['content-type'].includes('json')).to.equal(true);
    expect(createdBoard).to.have.property('id');
    expect(createdBoard.name).to.equal(boardName);
  });

  afterEach(async () => {
    if (boardId) {
      await deleteBoard(boardId).expect(200);
      boardId = null;
    }
  });

  it('should get the board details', async () => {
    const fetchedBoardResponse = await getBoard(boardId).expect(200);
    const fetchedBoard = fetchedBoardResponse.body;

    expect(fetchedBoardResponse.headers['content-type']).to.match(/json/);
    expect(fetchedBoard).to.have.property('id');
    expect(fetchedBoard.id).to.equal(boardId);
    expect(fetchedBoard.name).to.equal(boardName);
  });

  it('should update the board name', async () => {
    const updatedName = 'Updated Api test board';

    const updatedBoardResponse = await updateBoard(boardId, {name: updatedName}).expect(200);
    const updatedBoard = updatedBoardResponse.body;

    expect(updatedBoardResponse.headers['content-type']).to.match(/json/);
    expect(updatedBoard).to.have.property('id');
    expect(updatedBoard.name).to.equal(updatedName);
  });

  it('should update the board description', async () => {
    const updatedDescription = 'This is an updated description for the test board.';

    const updatedBoardResponse = await updateBoard(boardId, {desc: updatedDescription}).expect(200);
    const updatedBoard = updatedBoardResponse.body;

    expect(updatedBoardResponse.headers['content-type']).to.match(/json/);
    expect(updatedBoard).to.have.property('id');
    expect(updatedBoard.desc).to.equal(updatedDescription);
  });

  it('should delete the board and verify deletion', async () => {
    const deleteResponse = await deleteBoard(boardId).expect(200);
    const deletedBoard = deleteResponse.body;

    expect(deleteResponse.headers['content-type']).to.match(/json/);
    expect(deletedBoard._value).to.equal(null);
    await getBoard(boardId).expect(404);
    boardId = null;
  });
});
