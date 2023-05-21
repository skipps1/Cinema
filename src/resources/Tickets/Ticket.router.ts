import StatusCodes from 'http-status-codes';
import { Router, Response, Request} from 'express';
import catchErrors from '../../common/catchErrors';
import Ticket from './Ticket.model';
import { TTicketModel } from './Ticket.type';
import * as ticketService from './Ticket.service';

const router = Router();

router.route('/').get(
  catchErrors(async (_req: Request, res: Response) => {
    const ticket = await ticketService.getAll();

    res.json(ticket.map(Ticket.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req: Request, res: Response) => {
    // const { id, seat, hall, filmName, duration, visiterID }:TTicketModel = req.body;

    const ticket = await ticketService.createTicket(/*{ id, seat, hall, filmName, duration, cinemaID, visiterID }*/req.body);

    if (ticket) {
      res.status(StatusCodes.CREATED).json(Ticket.toResponse(ticket));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'TICKET_NOT_CREATE', msg: 'Ticket not create' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const ticket = await ticketService.getById(id || '');

    if (ticket) {
      res.json(Ticket.toResponse(ticket));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TICKET_NOT_FOUND', msg: 'Ticket not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { seat, hall, filmName, duration, cinemaID, visiterID } = req.body;

    const ticket = await ticketService.updateById({ id: id||'', seat, hall, filmName, duration, cinemaID, visiterID });

    if (ticket) {
      res.status(StatusCodes.OK).json(Ticket.toResponse(ticket));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TICKET_NOT_FOUND', msg: 'Ticket not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req: Request, res: Response) => {
    const { id } = req.params;

    const ticket = await ticketService.deleteById(id || '');

    if (!ticket) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'TICKET_NOT_FOUND', msg: 'Ticket not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'TICKET_DELETED', msg: 'The ticket has been deleted' });
  })
);

export default router;