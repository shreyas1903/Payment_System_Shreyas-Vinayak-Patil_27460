package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "account_number")
	private String account_number;
	@Column(name ="account_sequnce_id")
	private String  account_sequnce_id;
	@Column(name = "mobile_number")
	private String mobile_number;
	@Column(name = "address")
	private String address;
	@Column(name = "Bill_status")
	private String bill_status;

	public Employee() {
		
	}
	
	public Employee(String firstName, String lastName, String emailId,String account_number,String account_sequnce_id,String mobile_number,String address,String bill_status) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.account_number = account_number;
		this.account_sequnce_id =  account_sequnce_id;
		this.mobile_number=mobile_number;
		this.address=address;
		this.bill_status=bill_status;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public void setAccount_number(String account_number){ this.account_number=account_number;}
	public String getAccount_number(){return account_number;}

	public String getMobile_number() {
		return mobile_number;
	}

	public void setMobile_number(String mobile_number) {
		this.mobile_number = mobile_number;
	}

	public String getAccount_sequnce_id() {
		return account_sequnce_id;
	}

	public void setAccount_sequnce_id(String account_sequnce_id) {
		this.account_sequnce_id = account_sequnce_id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBill_status() {
		return bill_status;
	}

	public void setBill_status(String bill_status) {
		this.bill_status = bill_status;
	}
}
