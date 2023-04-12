import { Router } from 'express';
import catchErrors from '../../../common/catchErrors.js';
import Visiter from './Visiter.memory.repository.js';
import * as visitersService from './Visiter.service.js';

const router = Router();



router.route('/').get(
  catchErrors(async (req, res) => {
    const visiters = await visitersService.getAll();

    res.json(visiters.map(Visiter.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, Name, Age } = req.body;

    const visiter = await visitersService.createVisiter({ id, Name, Age });

    if (visiter) {
      res.status(StatusCodes.CREATED).json(Visiter.toResponse(visiter));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'VISITER_NOT_CREATE', msg: 'Visiter not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const visiter = await visitersService.getById(id);

    if (visiter) {
      res.json(Visiter.toResponse(visiter));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: ' VISITER_NOT_FOUND', msg: 'Visiter not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { title, columns } = req.body;

    const board = await boardsService.updateById({ id, title, columns });

    if (board) {
      res.status(StatusCodes.OK).json(Board.toResponse(board));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'BOARD_NOT_FOUND', msg: 'Board not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const visiter = await visitersService.deleteById(id);

    if (!visiter) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'VISITER_NOT_FOUND', msg: 'Visiter not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'VISITER_DELETED', msg: 'Visiter has been deleted' });
  })
);

export default router;
