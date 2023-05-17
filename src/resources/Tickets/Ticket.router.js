import StatusCodes from 'http-status-codes';
import { Router } from 'express';
import catchErrors from '../../common/catchErrors.js';
import Ticket from './Ticket.model.js';
import * as ticketService from './Ticket.service.js';

const router = Router();

router.route('/').get(
  catchErrors(async (_req, res) => {
    const ticket = await ticketService.getAll();

    res.json(ticket.map(Ticket.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, seat, hall, filmName, duration, visiterID } = req.body;

    const ticket = await ticketService.createTicket({ id, seat, hall, filmName, duration, visiterID });

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
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const ticket = await ticketService.getById(id);

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
  catchErrors(async (req, res) => {
    const { id, adress } = req.params;
    const { seat, hall, filmName, duration, visiterID } = req.body;

    const ticket = await ticketService.updateById({ id, seat, hall, filmName, adress, duration, visiterID });

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
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const ticket = await ticketService.deleteById(id);

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