import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import catchErrors from '../../common/catchErrors';
import Cinema from './Cinema.model';
import { TCinemaModel } from './Cinema.type';
import * as cinemaService from './Cinema.service';

const router = Router();

router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const cinema = await cinemaService.getAll();

    res.json(cinema.map(Cinema.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    const { id, adress, numberOfHalls }:TCinemaModel = req.body;

    const cinema = await cinemaService.createCinema({ id, adress, numberOfHalls });

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const cinema = await cinemaService.getById(id || '');

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { adress, numberOfHalls } = req.body;

    const cinema = await cinemaService.updateById({ id: id || '', adress, numberOfHalls });

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const cinema = await cinemaService.deleteById(id || '');

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
