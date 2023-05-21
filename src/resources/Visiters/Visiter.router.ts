import StatusCodes from 'http-status-codes';
import { Router, Response, Request } from 'express';
import catchErrors from '../../common/catchErrors';
import Visiter from './Visiter.model';
import { TVisiterModel } from './Visiter.type';
import * as visitersService from './Visiter.service';

const router = Router();


router.route('/').get(
  catchErrors(async (req: Request, res: Response) => {
    const visiters = await visitersService.getAll();

    res.json(visiters.map(Visiter.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    const { id, name, age }: TVisiterModel = req.body;

    const visiter = await visitersService.createVisiter({ id, name, age });

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const visiter = await visitersService.getById(id || '');

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
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const visiter = await visitersService.updateById({ id: id||'', name, age });

    if (visiter) {
      res.status(StatusCodes.OK).json(Visiter.toResponse(visiter));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'VISITER_NOT_FOUND', msg: 'Visiter not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const visiter = await visitersService.deleteById(id || '');

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