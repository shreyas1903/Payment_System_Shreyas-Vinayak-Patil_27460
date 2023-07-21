package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Bill;
import net.javaguides.springboot.repository.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BillController {
    private final BillRepository billRepository;

    @Autowired
    public BillController(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    @PostMapping("/registerBill")
    public Bill registerBill(@RequestBody Bill bill) {
        bill.setBillStatus("PENDING");
        return billRepository.save(bill);
    }
}
