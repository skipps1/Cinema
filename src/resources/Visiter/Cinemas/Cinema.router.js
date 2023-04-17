import { Router } from 'express';
import catchErrors from '../../../common/catchErrors.js';
import Cinema from './Cinema.service.js';
import * as cinemaService from './Cinema.service.js';

const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const cinema = await cinemaService.getAll();

    res.json(cinema.map(Cinema.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, Adress, Num_Of_Halls } = req.body;

    const cinema = await cinemaService.createUser({ id, Adress, Num_Of_Halls });

    if (cinema) {
      res.status(StatusCodes.CREATED).json(Cinema.toResponse(cinema));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'CINEMA_NOT_CREATE', msg: 'Cinema not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { ID } = req.params;

    const cinema = await cinemaService.getById(id);

    if (cinema) {
      res.json(Cinema.toResponse(cinema));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CINEMA_NOT_FOUND', msg: 'Cinema not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { ID } = req.params;
    const { Adress, Num_of_Halls } = req.body;

    const cinema = await cinemaService.updateById({ ID, Adress, Num_of_Halls });

    if (cinema) {
      res.status(StatusCodes.OK).json(Cinema.toResponse(cinema));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CINEMA_NOT_FOUND', msg: 'Cinema not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const cinema = await cinemaService.deleteById(id);

    if (!cinema) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'CINEMA_NOT_FOUND', msg: 'Cinema not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'CINEMA_DELETED', msg: 'The cinema has been deleted' });
  })
);

export default router;
