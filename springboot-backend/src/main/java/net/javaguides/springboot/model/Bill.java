package net.javaguides.springboot.model;

import jakarta.persistence.*;


@Entity
@Table(name = "bills")
public class Bill {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "biller_code")
    private String billerCode;

    @Column(name = "consumer_number")
    private String consumerNumber;

    @Column(name = "bill_number")
    private String billNumber;

    @Column(name = "bill_amount")
    private double billAmount;

    @Column(name = "due_date")
    private String dueDate;

    @Column(name = "bill_status")
    private String billStatus;

    public Bill(Long id, String billerCode, String consumerNumber, String billNumber, double billAmount, String dueDate, String billStatus) {
        this.id = id;
        this.billerCode = billerCode;
        this.consumerNumber = consumerNumber;
        this.billNumber = billNumber;
        this.billAmount = billAmount;
        this.dueDate = dueDate;
        this.billStatus = billStatus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBillerCode() {
        return billerCode;
    }

    public void setBillerCode(String billerCode) {
        this.billerCode = billerCode;
    }

    public String getConsumerNumber() {
        return consumerNumber;
    }

    public void setConsumerNumber(String consumerNumber) {
        this.consumerNumber = consumerNumber;
    }

    public String getBillNumber() {
        return billNumber;
    }

    public void setBillNumber(String billNumber) {
        this.billNumber = billNumber;
    }

    public double getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(double billAmount) {
        this.billAmount = billAmount;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getBillStatus() {
        return billStatus;
    }

    public void setBillStatus(String billStatus) {
        this.billStatus = billStatus;
    }
    public Bill(){

    }
}
