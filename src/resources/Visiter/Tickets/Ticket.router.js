import { Router } from 'express';
import catchErrors from '../../../common/catchErrors.js';
import Ticket from './Ticket.service.js';
import * as ticketService from './Ticket.service.js';

const router = Router();

router.route('/').get(
  catchErrors(async (req, res) => {
    const ticket = await ticketService.getAll();

    res.json(ticket.map(Ticket.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, Seat, Hall, Film_name, Duration, Vname } = req.body;

    const ticket = await ticketService.createUser({ id, Seat, Hall, Film_name, Duration, Vname });

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
    const { ID } = req.params;

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
    const { ID, Adress } = req.params;
    const { Seat, Hall, Film_name, Duration, Vname } = req.body;

    const ticket = await ticketService.updateById({ ID, Seat, Hall, Film_name, Adress, Duration, Vname });

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