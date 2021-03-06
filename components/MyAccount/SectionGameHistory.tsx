import React from 'react';
import { TableData, Button } from '@components/UI';
import { betActions } from '@store/actions';
import { useDispatch } from 'react-redux';
const tableInfo = {
  headers: ['Date', 'Game'],
  body: [
    {
      date: '14 Apr 2020',
      game: 'adadawdawda',
    },
  ],
};

const SectionGameHistory = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(betActions.fetchBetsRequest());
  }, []);

  return (
    <section className='section game-history'>
      <div className='game-history__info info'>
        <h3 className='info__title'>Recent game history</h3>
        <TableData
          tableInfo={tableInfo}
          renderRow={(item: any, index: any) => (
            <tr key={index + item.game}>
              <td>{item.date}</td>
              <td>{item.game}</td>
              <td>
                <Button styleType='link'>View picks</Button>
              </td>
            </tr>
          )}
        />

        <div className='info__action'>
          <Button styleType='secondary' className='info__btn'>
            See all game history
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionGameHistory;
